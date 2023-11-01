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
          <Typography variant='h1' text='Welcome to the Rapid Api Hub' className='mb-4 text-white'/>
          <Typography variant='body' text='Discover and connect to thousands of APIs' className='mb-4 text-white'/>
        </div>
      </div>
      <div>
        <div className="flex">
          <ApiHubSideBar/>
          <div className="w-70 md:w-4/5  flex flex-col">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
