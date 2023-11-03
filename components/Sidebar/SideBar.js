import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Typography from "@/components/Typegraphy/Typography";
import Image from "next/image";
import Link from "next/link";

const pages = [
  {
    name: 'Dashboard',
    icon: 'dashboard',
    path: '/dashboard',
    active: false,
  },
  {
    name: 'Analytics',
    icon: 'analytics',
    path: '/analytics',
    active: false,
  },
  {
    name: 'Hub Listing',
    icon: 'list',
    path: '/hub-listing',
    active: false
  },
  {
    name: 'Settings',
    icon: 'setting',
    path: '/settings',
    active: false,
  },
  {
    name: 'Billing',
    icon: 'billing',
    path: '/billing',
    active: false,
  },
]
const SideBar = () => {
  const [data, setData] = useState(pages)
  const {pathname} = useRouter();
  const activePage = () => {
    let temp = [...data]
    temp = temp.map(item => ({
      ...item,
      active: item.path.includes(pathname)
    }))
    setData(temp)
  }
  useEffect(() => {
    activePage()
  }, [pathname])

  return (
    <div className="hidden lg:block w-1/6  lg:w-1/4 xl:w-1/6 text-black min-h-screen border-r border-blue-500 ">
      <div className='bg-blue-500 mb-4'>
        <img src={'/images/app-logo.png'} alt={'logo'} height={60} width={60} className='w-full'/>
      </div>
      <ul className="space-y-2 px-2">
        {
          data.map((page, index) => {
            return (
              <Link
                href={page.path}
                className={`flex gap-1 hover:bg-blue-400 text-blue-500 bg-white hover:rounded p-3 cursor-pointer ${page.active && '!bg-blue-500 hover:bg-blue-500 text-white rounded p-3'}`}
                key={`page-${page.name}`}
              >
                <Image src={`/icons/${page.icon}.svg`} height={20} width={20} alt={`page-icon`}/>
                <Typography variant='body' text={page.name}/>
              </Link>
            )
          })
        }
      </ul>
    </div>
  )
}

export default SideBar
