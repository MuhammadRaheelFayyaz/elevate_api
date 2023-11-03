import React from 'react'
import Image from 'next/image'
import Typography from '../Typegraphy/Typography'
export default function DashboardCard() {
  return (
    <div className="w-1/4 flex flex-col justify-center items-center mx-2">
    <Image src={'/icons/next.svg'} alt="react logo" width={70} height={100} />
    <Typography
            variant="h3"
            text="Errors and latency"
            className="text-center text-black font-semibold sm:text-base md:text-lg lg:text-xl pb-2"
          />
    <Typography
            variant="body"
            text=" Ensure your apps uptime by keeping track of API errors and trends in
            latency."
            className="text-center text-black sm:text-xs md:text-sm lg:text-base"
          />

  </div>

  )
}
