import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Typography from "@/components/Typegraphy/Typography";
import Image from "next/image";

const pages = [
    {
        name: 'Dashboard',
        icon:'dashboard',
        path: '/',
        active: false,
    },
    {
        name: 'Analytics',
        icon:'analytics',
        path: '/analytics',
        active: false,
    },
    {
        name: 'Hub Listing',
        icon:'list',
        path: '/hub-listing',
        active: false
    },
    {
        name: 'Settings',
        icon:'setting',
        path: '/settings',
        active: false,
    },
    {
        name: 'Inbox',
        icon:'inbox',
        path: '/inbox',
        active: false,
    },
    {
        name: 'Billing',
        icon:'billing',
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
        <div className="hidden md:block w-1/6 text-black py-4 px-2 min-h-screen border-r border-blue-500 ">
            <Typography variant='h2' text='Sidebar' className='mb-4'/>
            <ul className="space-y-2">
                {
                    data.map((page, index) => {
                        return (
                            <li className={`flex gap-1 hover:bg-blue-400 text-blue-500 hover:rounded p-3 cursor-pointer ${page.active && 'bg-blue-400 text-white rounded p-3'}`}
                                key={`page-${page.name}`}>
                                <Image src={`/icons/${page.icon}.svg`} height={20} width={20} />
                                <Typography variant='body' text={page.name}/>
                            </li>
                        )
                    })
                }

            </ul>
        </div>
    )
}

export default SideBar
