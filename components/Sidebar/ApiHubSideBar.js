import React from 'react'
import Typography from '../Typegraphy/Typography'
export default function ApiHubSideBar() {
    const data = [
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
  return (
    <div class="w-30 md:w-1/5 p-4 lg:p-8 xl:p-12 2xl:p-20  flex flex-col">
    <Typography variant='h2' text='Categories' className='mb-4'/>
      <ul className="space-y-2">
                  {
                      data.map((page, index) => {
                          return (
                              <li className={`flex gap-1 hover:bg-blue-400 text-blue-500 hover:rounded p-3 cursor-pointer ${page.active && 'bg-blue-400 text-white rounded p-3'}`}
                                  key={`page-${page.name}`}>
                                  {/* <Image src={`/icons/${page.icon}.svg`} height={20} width={20} /> */}
                                  <Typography variant='body' text={page.name}/>
                              </li>
                          )
                      })
                  }
  
              </ul>
    </div>
  )
}
