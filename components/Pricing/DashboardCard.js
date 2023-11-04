import React from 'react'
import Image from 'next/image'
import Typography from '../Typegraphy/Typography'
export default function DashboardCard({number,heading,text}) {
  return (
    <div className="w-1/4 flex flex-col justify-center items-center mx-2">
        <div class="h-12 w-12 flex items-center justify-center rounded-full bg-blue-500">
  <p class="text-xl text-white ">{number}</p>
</div>
    {/* <Image src={image} alt="react logo" width={70} height={70}  className='object-contain	'/> */}
    <Typography
            variant="h3"
            text={heading}
            className="text-center text-black font-semibold sm:text-base md:text-lg lg:text-xl pb-2"
          />
    <Typography
            variant="body"
            text={text}
            className="text-center text-black sm:text-xs md:text-sm lg:text-base"
          />

  </div>

  )
}
