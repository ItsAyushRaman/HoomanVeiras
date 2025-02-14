import { create } from "zustand"; // Import Zustand for state management
import { axiosInstance } from "../lib/axios"; // Import your Axios instance
import toast from "react-hot-toast"; // Import toast for notifications
import { AxiosError } from "axios"; // Import AxiosError for proper error handling



// Define AuthUser interface based on backend structure
interface AuthUser {
    id?: string; // Marked as optional since it's not present in the signup response
    name: string;
    email: string;
    password?: string;  
    course: string;
    university: string;
    department: string;
    year: string;
    contactNumber: string;
    gender: string;
    type: "SOLO" | "TEAM";
    members?: {
        name: string;
    }[];
}

interface AuthStore {
    authUser: Omit<AuthUser, "password"> | null;
    isSigningUp: boolean;
    isLoggingIn: boolean;
    isCheckingAuth: boolean;
    checkAuth: () => Promise<void>;
    signup: (data: AuthUser) => Promise<void>;
    login: (data: { email: string; password: string }) => Promise<void>;
    logout: () => Promise<void>;
  }

export const useAuthStore = create<AuthStore>((set) => ({
    authUser: null as Omit<AuthUser, "password">| null,
    isSigningUp: false,
    isLoggingIn: false,
    isCheckingAuth: true,


    
    // ✅ Check authentication by fetching the profile
    checkAuth: async () => {
        try {
            const res = await axiosInstance.get<Omit<AuthUser, "password">>("/profile");
            set({ authUser: res.data });
        } catch (error) {
            set({ authUser: null });
            if (error instanceof AxiosError && error.response) {
                console.error("Error in checkAuth:", error.response.data);
            }
        } finally {
            set({ isCheckingAuth: false });
        }
    },

    // ✅ Signup route updated: `/registration/participant` for individuals, `/registration/team` for teams
    signup: async (data: AuthUser) => {
        
        set({ isSigningUp: true });
        console.log("sign part 0");

        try {
            console.log("sign part 1");

            const endpoint = data.type === "TEAM" ? "/registration/team" : "/registration/participant";
            console.log("sign part 2");

            const res = await axiosInstance.post<Omit<AuthUser, "password">>(endpoint, data);
            set({ authUser: res.data });
            console.log("sign part 3");

            toast.success("Account created successfully!");
        } catch (error) {
            if (error instanceof AxiosError && error.response) {
                toast.error(error.response.data.message || "Signup failed");
                console.log(" sign up -1")
                console.log(error.response.data.message);

            }
        } finally {
            set({ isSigningUp: false });
        }
    },

    // ✅ Login route updated: `/login`
    login: async (data: { email: string; password: string }) => {
        set({ isLoggingIn: true });

        try {
            const res = await axiosInstance.post<Omit<AuthUser, "password">>("/login", data);
            set({ authUser: res.data });
            toast.success("Login successful!");
        } catch (error) {
            if (error instanceof AxiosError && error.response) {
                toast.error(error.response.data.message || "Login failed");
            }
        } finally {
            set({ isLoggingIn: false });
        }
    },

    // ✅ Logout route updated: `/logout`
    logout: async () => {
        try {
            await axiosInstance.post("/logout", {}, { withCredentials: true });
            set({ authUser: null });
            toast.success("Logged out successfully!");
        } catch (error) {
            if (error instanceof AxiosError && error.response) {
                toast.error(error.response.data.message || "Logout failed");
            }
            console.error("Error in logout:", error);
        }
    },
}));
