import React from 'react'
import Image from 'next/image'
import Typography from '../Typegraphy/Typography'
export default function PlatformCard() {
  return (
    <div className="flex flex-col items-center">
    <div className="flex flex-col justify-center items-center ">
      <Image src={'/icons/next.svg'} alt="placeholder logo" width={100} height={100}/>
      <Typography
            variant="body"
            text=" 3,000,000"
            className="text-black text-center sm:text-base md:text-lg lg:text-xl font-semibold"
          />
    </div>
   <Typography
            variant="body"
            text="Developers"
            className="text-black text-sm text-center"
          />

  </div>
  )
}
