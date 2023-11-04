import React from 'react'
import Image from 'next/image'
import Typography from '../Typegraphy/Typography'
export default function PlatformCard({image,text}) {
  return (
    <div className="flex flex-col items-center">
    <div className="flex flex-col justify-center items-center ">
      <Image src={image} alt="placeholder logo" width={100} height={100}  quality={100} // Set quality to 100
                unoptimized={true}/>
      <Typography
            variant="body"
            text=" 3,000,000"
            className="text-black text-center sm:text-base md:text-lg lg:text-xl font-semibold"
          />
    </div>
   <Typography
            variant="body"
            text={text}
            className="text-black text-sm text-center"
          />

  </div>
  )
}
