// components/Navbar.js
import React from 'react';
import Link from 'next/link'
import {useRouter} from 'next/router';

const pages = [
  {
    name: 'API Hub',
    path: '/api-hub'
  },
  {
    name: 'Organization ',
    path: '/organization'
  },
  {
    name: 'Apps',
    path: '/developer/dashboard'
  },
  {
    name: 'My APIs',
    path: '/studio'
  }
]

const Navbar = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <nav className="bg-blue-500 border-b border-blue-500 p-1 md:p-2 lg:py-0 lg:px-4">
      <div className="container ">
        <div className="flex items-center justify-between">
          <div className='max-[320px]:hidden max-[425px]:w-[19%] w-1/4 lg:w-[10%]'>
            <img src={'/images/app-logo.png'} alt={'logo'}   />
          </div>
          <ul className="flex items-end gap-4">
            {
              pages.map(((page, index) => (
                <li
                  className={` text-white cursor-pointer hover:border-b border-white ${pathname.includes(page.path) && 'border-b border-blue-white'}`}
                  key={`${page.name}-${index}`}>
                  <Link href={page.path} className="">
                    {page.name}
                  </Link>
                </li>
              )))
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
