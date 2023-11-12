// MobileDrawer.js
import React, {useEffect, useState} from "react";
import Link from "next/link";
import Image from "next/image";
import Typography from "@/components/Typegraphy/Typography";
import {useRouter} from "next/router";
import Accodian from "@/components/Accodian";


const pages = [
  {
    name: 'API Hub',
    icon: 'analytics',
    path: '/api-hub',
    active: false,
  },
  {
    name: 'My APIs',
    path: '/studio',
    active: false,

  },
  {
    name: 'My Apps',
    path: '/developer/dashboard',
    active: false,
    children: [
  {
    name: 'Dashboard',
    icon: 'dashboard',
    path: '/developer/dashboard',
    active: false,
  },
  {
    name: 'Add New App',
    icon: 'add-circle',
    path: '/developer/add-app',
    active: false,
  },
  {
    name: 'Inbox',
    icon: 'analytics',
    path: '/provider/analytics',
    active: false,
  },
  {
    name: 'Billing',
    icon: 'list',
    path: '/provider/hub-listing/monetize',
    active: false
  },
]
  },

  {
    name: 'Hub Listing',
    icon: 'list',
    path: '/provider/hub-listing/general',
    active: false,
    children: [
      {
        name: 'General',
        icon: 'list',
        path: '/provider/hub-listing/general',
        active: false,
      },
      {
        name: 'Definitions',
        icon: 'list',
        path: '/provider/hub-listing/definitions',
        active: false,
      },
      {
        name: 'Docs',
        icon: 'list',
        path: '/provider/hub-listing/docs',
        active: false,
      },
      {
        name: 'Community',
        icon: 'list',
        path: '/provider/hub-listing/community',
        active: false,
      },
      {
        name: 'Monetize',
        icon: 'list',
        path: '/provider/hub-listing/monetize',
        active: false,
      }
    ]
  },
  {
    name: 'Settings',
    icon: 'setting',
    path: '/provider/settings',
    active: false,
  },
  {
    name: 'Billing',
    icon: 'billing',
    path: '/provider/hub-listing/monetize',
    active: false,
  },
]

const developerPages = [
  {
    name: 'Dashboard',
    icon: 'dashboard',
    path: '/developer/dashboard',
    active: false,
  },
  {
    name: 'Add New App',
    icon: 'add-circle',
    path: '/developer/add-app',
    active: false,
  },
  {
    name: 'Inbox',
    icon: 'analytics',
    path: '/provider/analytics',
    active: false,
  },
  {
    name: 'Billing',
    icon: 'list',
    path: '/provider/hub-listing/monetize',
    active: false
  },
]

const MobileDrawer = ({isOpen, onClose, children,}) => {

  const [data, setData] = useState(pages)

  const router=useRouter()
  const {pathname} = router;
  const activePage = () => {
    let temp = [...data]
    temp = temp.map(item => ({
      ...item,
      active: item.path.includes(pathname),

    }))
    setData(temp)
  }
  useEffect(() => {
    activePage()
  }, [pathname])
  useEffect(() => {
    activePage()
  }, [])
  const drawerClasses = isOpen
    ? "fixed inset-0 overflow-hidden z-50 md:hidden"
    : "hidden";

  return (
    <div className={drawerClasses}>
      <div
        className="absolute inset-0 bg-gray-800 opacity-75"
        onClick={onClose}
      >
      </div>
      <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex w-2/3">
        <div className="relative w-screen max-w-md">
          <div className="h-full bg-white shadow-xl overflow-y-scroll">
            <div className="">
              {/* {children} */}
              <div className='p-1 absolute w-full'>
                <img src='/icons/close-light.svg' className='ml-auto mr-2 mt-2' onClick={onClose}/>
              </div>
              <div className='min-h-[150px] bg-blue-500'>
                <img src='/images/app-logo.png'/>
              </div>

              <div className='p-4'>
                <div
                  className={`flex gap-1 cursor-pointer border p-3 mb-4 ${pathname==='/user'?'border-blue-400':''}`}
                  onClick={() => router.push("/user")}
                >
                  <img
                    src={"/images/profile.jpeg"}
                    className="h-[30px] w-[30px] rounded-full"
                  />
                  <Typography
                    text="Muhammad"
                    variant="body"
                  />
                </div>
                <ul>
                  {
                    data.map((page, index) => {
                      const isSelected = !!(page.children && page.children.some(child => child.path.includes(pathname)))
                      return (
                        <li  key={`page-${page.name}`}>
                          {
                            !page.children && (
                              <Link
                                href={page.path}
                                className={`flex gap-1 hover:bg-blue-400 text-blue-500 bg-white hover:rounded p-3 cursor-pointer ${page.active && !page.children && '!bg-blue-500 hover:bg-blue-500 text-white rounded p-3'} ${!page.children ? 'mb-2' : ''}`}

                              >
                                {/*<Image src={`/icons/${page.icon}.svg`} height={20} width={20} alt={`page-icon`}/>*/}
                                <Typography variant='body' text={page.name}/>
                              </Link>
                            )
                          }
                          {page.children && (
                            <Accodian title={page.name} wrapperClasses={isSelected?'border-1 !border-blue-400':'border-1'}  >
                              {
                                page.children && (
                                  <ul className='ml-2 mt-2'>
                                    {
                                      page.children.map(item => (
                                        <li className='mt-2'  key={`sub-page-${item.name}`}>
                                          <Link
                                            href={item.path}
                                            className={`flex gap-1 hover:bg-blue-400 text-blue-500 bg-white hover:rounded p-3 cursor-pointer ${item.path.includes(pathname) && '!bg-blue-500 hover:bg-blue-500 text-white rounded p-3'}`}
                                            key={`page-${item.name}`}
                                          >
                                            <Typography variant='body' text={item.name}/>
                                          </Link>
                                        </li>
                                      ))
                                    }
                                  </ul>
                                )
                              }
                            </Accodian>
                          )}

                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileDrawer;
