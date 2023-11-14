import React from "react";

const Footer = () => {

  return (
    <footer className="bg-white rounded-lg shadow ">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col gap-2 md:flex-row items-center justify-between">
        <span className="text-sm text-gray-500 sm:text-center ">
          © 2023{" "}
          <a href="https://elevateAPI.com/" className="hover:underline">
            elevateAPI
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center gap-2 list-none mt-3 text-sm font-medium text-gray-500  sm:mt-0">
          <li className="min-w-fit cursor-pointer">
              About
          </li>
          <li className="min-w-fit cursor-pointer">
            Blog
          </li>
          <li className="min-w-fit cursor-pointer">
          Learn
          </li>
          <li className="min-w-fit cursor-pointer">
          Careers
          </li>
          <li className="min-w-fit cursor-pointer">
          Press
          </li>
          <li className="min-w-fit cursor-pointer">
          Contact
          </li>
          <li className="min-w-fit cursor-pointer">
          Terms
          </li>
          <li className="min-w-fit cursor-pointer">
          Privacy
          </li>
        </ul>
        <div className="flex gap-2 items-center">
          <img src='/icons/facebook.svg' className="w-6 h-6 cursor-pointer" alt="facebook" />
          <img src='/icons/twitter.svg' className="w-6 h-6 cursor-pointer" alt="twitter" />
          <img src='/icons/linkedin.svg' className="w-6 h-6 cursor-pointer" alt="linkedin" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
