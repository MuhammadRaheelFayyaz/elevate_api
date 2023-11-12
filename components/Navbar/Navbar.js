// components/Navbar.js
import React, {useState} from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Typography from "@/components/Typegraphy/Typography";
import MobileDrawer from "../MobileDrawer/MobileDrawer";
import UserDropdown from "../UserDropdown";

const pages = [
  {
    name: "API Hub",
    path: "/api-hub",
  },
  {
    name: "Apps",
    path: "/developer/dashboard",
  },
  {
    name: "My APIs",
    path: "/studio",
  },
];

const Navbar = () => {
    const [openDrawer, setOpenDrawer]=useState(false)
    const router = useRouter();
    const pathname = router.pathname;

    return (
      <>
        <nav className="bg-blue-500 border-b border-blue-500 p-4 md:p-2 lg:py-0 lg:px-4 ">
          <div className="flex items-center justify-between">
            <div className=" max-[425px]:w-[19%] w-1/4 lg:w-[10%]">
              <img src={"/images/app-logo.png"} alt={"logo"} />
            </div>
            <div className="flex gap-4">
              <ul className="hidden md:flex gap-2 md:gap-4 items-center">
                {pages.map((page, index) => (
                  <li
                    className={`text-white cursor-pointer hover:border-b border-white ${
                      pathname.includes(page.path) && "border-b border-blue-white"
                    }`}
                    key={`${page.name}-${index}`}
                  >
                    <Link href={page.path} >
                      {page.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div
                className="hidden md:flex gap-1 items-center justify-end cursor-pointer"
                onClick={() => router.push("/user")}
              >
                <img
                  src={"/images/profile.jpeg"}
                  className="h-[30px] w-[30px] rounded-full"
                />
                <Typography
                  text="Muhammad"
                  variant="body"
                  className="text-white"
                />
              </div>
            </div>
            <div className='cursor-pointer md:hidden' onClick={()=>setOpenDrawer(true)}>
              <img src='/icons/menu.svg'  />
            </div>
          </div>
        </nav>
        <MobileDrawer isOpen={openDrawer} onClose={()=>setOpenDrawer(false)}  />
      </>
    );
};

export default Navbar;
