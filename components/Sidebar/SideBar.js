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
        name: 'Setting',
        icon:'setting',
        path: '/setting',
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
    console.log('pathname', pathname)
    const activePage = () => {
        let temp = [...data]
        temp = temp.map(item => ({
            ...item,
            active: item.path == pathname
        }))
        setData(temp)
    }
    useEffect(() => {
        activePage()
    }, [pathname])

    return (
        <div className="hidden md:block w-1/5 bg-blue-500 text-white p-4 min-h-screen">
            <Typography variant='h2' text='Sidebar' className='mb-4'/>
            <ul className="space-y-2">
                {
                    data.map((page, index) => {
                        return (
                            <li className={`flex gap-1 hover:bg-blue-100 hover:text-blue-500 hover:rounded p-3 cursor-pointer border-b border-blue-100 ${page.active && 'bg-blue-100 text-blue-500 rounded p-3'}`}
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
