import React from "react";
import Image from 'next/image';
import Typography from "../Typegraphy/Typography";
// import {ReactComponent as Bookmark} from '../../public/icons/bookmark.svg'
export default function RecommendApiCard({heading,text,time,tick,trend}) {
  return (
    <div className="flex flex-col  border width-23 border-gray-200 rounded p-3">
    <div className="flex justify-between">
      <div className="w-10 h-10 rounded-full bg-black"></div>
      <div className="text-gray-700"> <Image src={'/icons/bookmark.svg'} alt="Button Icon" width={24} height={24} /></div>
    </div>
    <Typography variant="h2" text={heading} className="text-left font-bold" />
    <Typography variant="h4" text={text} className="text-left break-words"  />
    <div className="flex justify-between">
      <div className="flex items-center gap-px	">
         <Image src={'/icons/trend.svg'} alt="Button Icon" width={15} height={14} />
        <div className="text-gray-700">{trend}</div>
      </div>
      <div className="flex items-center gap-px	">
         <Image src={'/icons/time.svg'} alt="Button Icon" width={16} height={14} />
        <div className="text-gray-700">{time} ms</div>
      </div>
      <div className="flex items-center gap-px	">
         <Image src={'/icons/tick.svg'} alt="Button Icon" width={24} height={14} />
        <div className="text-gray-700">{tick}</div>
      </div>
    </div>
  </div>
  
  );
}
