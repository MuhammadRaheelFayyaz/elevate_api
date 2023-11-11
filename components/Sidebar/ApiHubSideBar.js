import React from 'react'
import Typography from '../Typegraphy/Typography'

export default function ApiHubSideBar() {
  const data = [
    {
      name: 'Category 1',
    },
    {
      name: 'Category 2',
    },
    {
      name: 'Category 3',
    },
    {
      name: 'Category 4',
    },
    {
      name: 'Category 5',
    },
    {
      name: 'Category 6',
    },
    {
      name: 'Category 7',
    },
    {
      name: 'Category 8',
    },
    {
      name: 'Category 9',
    },
    {
      name: 'Category 10',
    },
    {
      name: 'Category 11',
    },
    {
      name: 'Category 12',
    },
    {
      name: 'Category 13',
    },
    {
      name: 'Category 14',
    },
    {
      name: 'Category 15',
    },
    {
      name: 'Category 16',
    },
    {
      name: 'Category 17',
    },
    {
      name: 'Category 18',
    },
    {
      name: 'Category 19',
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
