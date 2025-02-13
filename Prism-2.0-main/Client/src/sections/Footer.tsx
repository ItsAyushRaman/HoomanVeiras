import { Link } from "react-router-dom"; // Import Link from react-router-dom
import {
  DiscordLogo,
  LinkdinLogo,
  GridBkg,
  InstaLogo,
  TweeterLogo,
  EmailLogo,
  FooterLogo,
} from "../AllAssets";

// h-[45px] w-[190px] md:w-[520px] sm:w-[700px]
function Footer() {
  return (
    <>
      <footer className="relative flex justify-center items-center bg-transparent text-white  over pb-5 overflow-hidden">
        {/* Background Image */}
        <div
          style={{ backgroundImage: `url(${GridBkg})` }}
          className="absolute w-[99%] h-[100%] inset-0 bg-cover bg-center opacity-45 z-10"
        ></div>

        <div className=" absolute bottom-0 flex justify-center items-center min-h-screen  inset-0 bg-cover bg-center opacity-20 z-10">
          <div className="relative pt-5 mt-10 w-15 h-0.2 rounded-full bg-[#9e11f7] shadow-[0_0_140px_250px_#9747FF,0_0_140px_150px_#9C1466]"></div>
        </div>

        {/* Content */}
        <div className="container text-center flex flex-col items-center relative z-20 mt-16">
          {/* Logo */}
          <div className="mb-4">
            <img
              src={FooterLogo}
              alt="Logo"
              className="h-40 w-32 md:h-18 md:w-18 sm:h-16 sm:w-12 lg:h-40 lg:w-32" // Adjusted for laptop screens (lg)
            />
          </div>

          {/* Links Section */}
          <div className="flex justify-center items-center gap-6 mb-2">
            {/* Icon Links */}
            <Link
              to="https://x.com/PlacementEnggLU?t=vKQzx4oQXnIOphMkvWbR9w&s=08" // Use the Link component for navigation
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <img
                src={TweeterLogo}
                alt="Twitter"
                className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10" // Larger size for laptop
              />
            </Link>
            <Link
              to="https://discord.gg/wWnJyKcu" // Replace with a valid URL
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <img
                src={DiscordLogo}
                alt="Discord"
                className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10" // Larger size for laptop
              />
            </Link>
            <Link
              to="https://www.instagram.com/prism.foet?igsh=am1yMzZweDBiMGFm" // Replace with a valid URL
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <img
                src={InstaLogo}
                alt="Instagram"
                className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10" // Larger size for laptop
              />
            </Link>
            {/* <Link
              to="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <img
                src={YouTubeLogo}
                alt="YouTube"
                className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10" // Larger size for laptop
              />
            </Link> */}
            <Link
              to="https://www.linkedin.com/in/tpcfoet?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <img
                src={LinkdinLogo}
                alt="LinkedIn"
                className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10" // Larger size for laptop
              />
            </Link>
            <Link to="mailto:prism2025.contact@gmail.com" className="hover:opacity-80">
              <img
                src={EmailLogo}
                alt="Email"
                className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10" // Larger size for laptop
              />
            </Link>
          </div>

          {/* Text Links */}
          <div className="flex justify-center items-center gap-6 text-sm md:text-base w-[100%]">
            <Link
              to="/partner"
              className="text-[#B072FF] hover:text-purple-400 hover:font-bold font-Sans md:min-w-[150px]" // Removed underline on hover
            >
              Partner with us
            </Link>
            <Link
              to="/code-of-conduct"
              className="text-[#B072FF] hover:font-bold md:min-w-[150px]"
            >
              Code of Conduct
            </Link>
          </div>
          <Link
            to="https://github.com/archonsofficial"
            className="text-[#B072FF] hover:font-bold text-lg mt-3"
          >
            Made with 💜 by Archons
          </Link>
        </div>
      </footer>
    </>
  );
}

export default Footer;
