import React from "react";
import Image from "next/image";
import Typography from "../Typegraphy/Typography";
export default function RecommendApiCard({
  heading,
  text,
  time,
  tick,
  trend,
  onClick,
  verified,
}) {
  return (
    <div
      className="flex flex-col  border mx-2 border-blue-300 rounded-xl p-3 cursor-pointer"
      onClick={() => onClick()}
    >
      <div className="flex justify-between">
        <div className="w-10 h-10 rounded-full bg-black"></div>
        <div className="text-gray-700">
          <Image
            src={"/icons/bookmark.svg"}
            alt="Button Icon"
            width={24}
            height={24}
          />
        </div>
      </div>
      <Typography variant="h2" text={heading} className="text-center font-bold mt-1" />
      <Typography
        variant="small"
        text={text}
        className=" break-words pt-2.5 pb-5"
      />
      <div className="h-full min-h-[32px]">
        {verified === true && <div className="flex w-fit rounded-[20px] overflow-hidden mb-1 ml-auto">
          <Typography variant="xs" text="Verified" className="text-left !text-white p-1 px-2 bg-black" />
          <div className="bg-green-300 py-1 px-0.5">
            <Image
                src={"/icons/tick.svg"}
                alt="Button Icon"
                width={20}
                height={20}
              />
          </div>
        </div>}
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-px	">
          <Image
            src={"/icons/trend.svg"}
            alt="Button Icon"
            width={15}
            height={14}
          />
          <div className="text-gray-700">{trend}</div>
        </div>
        <div className="flex items-center gap-px	">
          <Image
            src={"/icons/time.svg"}
            alt="Button Icon"
            width={16}
            height={14}
          />
          <div className="text-gray-700">{time} ms</div>
        </div>
        <div className="flex items-center gap-px	">
          <Image
            src={"/icons/tick.svg"}
            alt="Button Icon"
            width={24}
            height={14}
          />
          <div className="text-gray-700">{tick}</div>
        </div>
      </div>
    </div>
  );
}
