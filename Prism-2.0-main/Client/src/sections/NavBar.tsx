import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";

import LULogoNew from "../assets/LULogoNew.png";
import NavLogoTwo from "../assets/NavLogoTwo.png";
import toast from "react-hot-toast";

const getHref = (item: string) => {
  switch (item) {
    case "HOME":
      return "/";
    case "SPONSORS":
      return "/sponsors";
    case "ABOUT":
      return "/about";
    case "EVENTS":
      return "/events";
    case "LOGIN":
      return "/";
    default:
      return "#";
  }
};

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["HOME", "SPONSORS", "ABOUT", "EVENTS", "LOGIN"];

  const notify = ()=>{
    toast("Registration starting soon")
  }

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      className="w-full flex justify-around align-middle md:px-0 bg-[#9747FF]/20 backdrop-blur-[30px] top-0 z-50"
    >
      <NavbarContent>
        <NavbarBrand>
          <div className="flex justify-start items-center h-full gap-4">
            <img
              src={NavLogoTwo}
              alt="Prism Logo"
              className="w-40 h-12 md:w-40 md:h-14 lg:w-40 lg:h-20 object-contain"
            />
            <img
              src={LULogoNew}
              alt="LU Logo"
              className=" block sm:hidden w-12 h-12 md:w-14 md:h-14 lg:w-14 lg:h-14 object-contain"
            />
          </div>
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className=" text-white sm:hidden"
        />
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-4"
        justify="center"
      ></NavbarContent>
      <NavbarContent justify="end" className=" hidden sm:flex gap-8">
        <NavbarItem>
          <Link color="foreground" href="/" className="text-white">
            HOME
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/about" className="text-white">
            ABOUT
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/events" className="text-white">
            EVENTS
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="sponsors" className="text-white">
            SPONSORS
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Button
            as={Link}
            // color="primary"
            // href="/login"
            variant="flat"
            onPress={notify}
            className="rounded-xl text-white  bg-[#0E101C]  border-spacing-3 border-2 border-prismpurple hover:border-pink/50 hover:shadow-lg"
          >
            LOGIN
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="h-fit  bg-white/10 backdrop-blur-sm shadow-md text-white">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full h-fit bg-transparent text-white"
              href={getHref(item)}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
