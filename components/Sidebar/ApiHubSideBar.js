import React from 'react'
import Typography from '../Typegraphy/Typography'

export default function ApiHubSideBar() {
  const data = [
    {
      name: 'Sports',
    },
    {
      name: 'Finance',
    },
    {
      name: 'Data',
    },
    {
      name: 'Entertainment',
    },
    {
      name: 'Travel',
    },
    {
      name: 'Location',
    },
    {
      name: 'Science',
    },
    {
      name: 'Food',
    },
    {
      name: 'Transportation',
    },
    {
      name: 'Business',
    },
    {
      name: 'Visual Recognition',
    },
    {
      name: 'Tools',
    },
    {
      name: 'Text Analysis',
    },
    {
      name: 'Weather',
    },
    {
      name: 'Gaming',
    },
    {
      name: 'SMS',
    },
    {
      name: 'Events',
    },
    {
      name: 'Health and Fitness',
    },
    {
      name: ' View All Categories',
    },
  ]
  return (
    <div className="w-30 md:w-1/5 p-4 lg:p-8 xl:p-12 2xl:p-20 hidden md:flex flex-col">
      <Typography variant='h2' text='Categories' className='mb-4'/>
      <ul className="space-y-2">
        {
          data.map((page, index) => {
            return (
              <li
                className={`flex gap-1 hover:bg-blue-400 text-blue-500 hover:rounded p-1 cursor-pointer ${page.active && 'bg-blue-400 text-white rounded p-3'}`}
                key={`page-${page.name}`}>
                <Typography variant='body' text={page.name}/>
              </li>
            )
          })
        }

      </ul>
    </div>
  )
}
