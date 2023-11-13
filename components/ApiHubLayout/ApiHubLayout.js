import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import Typography from "../Typegraphy/Typography";
import ApiHubSideBar from "../Sidebar/ApiHubSideBar";

export default function ApiPageLayout({children}) {

  return (
    <div>
      <Navbar/>
      <div className="bg-[rgb(48,47,61)] lg:h-1/6">
        <div className="container mx-auto p-6 lg:max-h-120 lg:h-1/6 ">
          <Typography variant='h1' text='Simply dummy text of the printing and typesetting' className='mb-4 text-white'/>
          <Typography variant='body' text='Lorem Ipsum has been the industry standard dummy text ever since the 1500s' className='mb-4 text-white'/>
        </div>
      </div>
      <div>
        <div className="flex bgGradient1">
          <ApiHubSideBar/>
          <div className=" w-full md:w-4/5 ">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
