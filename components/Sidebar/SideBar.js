import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Typography from "@/components/Typegraphy/Typography";
import Image from "next/image";
import Link from "next/link";
import UserDropdown from "../UserDropdown";

const pages = [
  // {
  //   name: 'Dashboard',
  //   icon: 'dashboard',
  //   path: '/dashboard',
  //   active: false,
  // },
  {
    name: 'Analytics',
    icon: 'analytics',
    path: '/provider/analytics',
    active: false,
  },
  {
    name: 'Hub Listing',
    icon: 'list',
    path: '/provider/hub-listing/general',
    active: false
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

const options = [
  { name: 'John Doe', avatar: '/images/profile.jpeg', accountType:"Personal Account" },
  { name: 'All Projects', avatar: '/icons/team.svg' },
];


const SideBar = ({isDeveloper = false}) => {
  const [data, setData] = useState(isDeveloper ? developerPages : pages)
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
    <div className="hidden lg:block w-1/6  lg:w-1/4 xl:w-1/6 text-black min-h-screen border-r border-blue-500">
      {/* <div className='bg-blue-500 mb-4'>
        <img src={'/images/app-logo.png'} alt={'logo'} height={60} width={60} className='w-full'/>
      </div> */}
      <div className="p-6 border-b-[1px] border-gray-300">
        <UserDropdown options={options} onSelect={(option) => console.log(option)} placeholder="Select a person"/>
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
