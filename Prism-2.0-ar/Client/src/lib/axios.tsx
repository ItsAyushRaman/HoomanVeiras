import axios, { AxiosInstance } from "axios";

export const axiosInstance: AxiosInstance = axios.create({
    baseURL: "http://localhost:8888",
 // This will send cookies in every single request
    headers: {
        "Content-Type": "application/json",
    },
});
