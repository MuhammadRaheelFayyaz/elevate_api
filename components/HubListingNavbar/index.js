import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";
import openInNew from "../../public/icons/openInNew.svg"
import React, {useState} from 'react';
import {useRouter} from "next/router";

const navItems = [
  {
    name: 'General',
    path: '/provider/hub-listing/general'
  },
  {
    name: 'Definitions',
    path: '/provider/hub-listing/definitions'
  },
  {
    name: 'Docs',
    path: '/provider/hub-listing/docs'
  },
  {
    name: 'Gateway',
    path: '/provider/hub-listing/gateway'
  },
  {
    name: 'Community',
    path: '/provider/hub-listing/community'
  },
  {
    name: 'Monetize',
    path: '/provider/hub-listing/monetize'
  },

]
const dropdownOptions = ["v1 (default)", "v2"]

const HubListingNavbar = () => {
  const router = useRouter()
  const {pathname} = useRouter()
  return (
    <div className="bg-white sm:px-6 border-b-[1px] hidden md:flex justify-between items-center gap-3 flex-wrap">
      <ul className="flex list-none flex-wrap sm:flex-auto">
        {
          navItems.map((item, index) => {
            return (
              <li
                key={`${index}-${item.name}`}
                className={`py-4 px-2 border-b-2 cursor-pointer ${pathname.includes(item.path) ? "border-blue-500 text-blue-500" : "border-transparent"}`}
                // onClick={() => setSelectedItem(index)}

                onClick={() => router.push(item.path)}
              >
                {item.name}
              </li>
            )
          })
        }
      </ul>
      <div className="flex items-center gap-2">
        <Dropdown options={dropdownOptions} className="w-[230px] min-w-[150px] !mb-0"
                  onSelect={(option) => console.log(option)} placeholder='v1 (default)'/>
        <Button text="View in Hub" className="!text-black flex-row-reverse gap-1 hover:bg-gray-200 bg-white"
                icon={openInNew}/>
      </div>
    </div>
  )
}

export default HubListingNavbar;