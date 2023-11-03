import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <div>
      <footer class="bg-white rounded-lg shadow m-4 ">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm text-gray-500 sm:text-center ">
            © 2023{" "}
            <a href="https://RapidAPI.com/" class="hover:underline">
              RapidAPI
            </a>
            . All Rights Reserved.
          </span>
          <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500  sm:mt-0">
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">
                Blog
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">
                Learn
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Careers
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">
                Press
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">
                Contact
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">
                Terms
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">
                Privacy
              </a>
            </li>
          </ul>

          <div className="flex">
            <Image src={'/icons/next.svg'} alt="react logo" width={30} height={50}/>
            <Image src={'/icons/next.svg'} alt="react logo" width={30} height={50}/>
            <Image src={'/icons/next.svg'} alt="react logo" width={30} height={50}/>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
