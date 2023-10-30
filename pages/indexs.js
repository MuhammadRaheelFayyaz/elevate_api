import React, { useState } from "react";
import SideBar from '@/components/Sidebar/LayoutWithSidebar'
import Button from "@/components/Button/Button";
import ToggleButton from "@/components/ToggleButton/Button";

import Typography from "@/components/Typegraphy/Typography";

export default function Home() {
  const [selectedOption, setSelectedOption] = useState('');
  const options = ['Option 1', 'Option 2', 'Option 3'];

  const handleSelect = (option) => {
    setSelectedOption(option);
  };
  return (
    <SideBar>
      <div className="plan-wrapper mx-3 md:mx-10 mt-10">
        <div class=" flex gap-2.5">
          <Button text='Public plans' className='max-w-[200px] mb-2 bg-[#00b1ff21] text-[#482f9e]' />
          <Button text='Private plans' className='max-w-[200px] mb-2 bg-[#00b1ff21] text-[#482f9e]' />
          <Button text='Transaction' className='max-w-[200px] mb-2 bg-[#00b1ff21] text-[#482f9e]' />
        </div>
        <Typography variant='h5' text='Drop File to Upload ' className=' mt-2' />
        <Typography variant='body'  className=' mb-10' text='The gateway developers use to make request to the API' />
        <div class="tab-content border border-[#3b71ca] rounded-lg">
          <div class="w-[100%] ml-auto p-3.5 flex flex-wrap gap-4 md:gap-6">
            <div class="plans-card w-[100%] max-w-[200px] align-center text-center">
            <ToggleButton />
              <Typography variant='h2' text='BASIC' className='text-[#345097] font-semibold mt-5' />
              <Typography variant='body' className='mb-2' text='$0.00/month' />
              <Button text='Edit' className='max-w-[200px] w-[100%] flex justify-center mb-2 mx-auto' />
            </div>
            <div class="plans-card w-[100%] max-w-[200px] align-center text-center">
              <ToggleButton />
              <Typography variant='h2' text='PRO' className='text-[#345097] font-semibold mt-5' />
              <Typography variant='body' className='mb-2' text='$0.00' />
              <Button text='Edit' className='max-w-[200px] w-[100%] flex justify-center mb-2 mx-auto' />
            </div>
            <div class="plans-card w-[100%] max-w-[200px] align-center text-center">
            <ToggleButton />
              <Typography variant='h2' text='ULTRA' className='text-[#345097] font-semibold mt-5' />
              <Typography variant='body' className='mb-2' text='$0.00/month' />
              <Button text='Edit' className='max-w-[200px] w-[100%] flex justify-center mb-2 mx-auto' />
            </div>
            <div class="plans-card w-[100%] max-w-[200px] align-center text-center">
              <ToggleButton />
              <Typography variant='h2' text='ULTRA' className='text-[#345097] font-semibold mt-5' />
              <Typography variant='body' className='mb-2' text='$0.00/month' />
              <Button text='Edit' className='max-w-[200px] w-[100%] flex justify-center mb-2 mx-auto' />
            </div>
          </div>
          <Typography variant='body' className='mx-3.5 mb-6' text='Objects' />
          <div className="border-b border-[#3b71ca] rounded-lg"></div>
          <div class="w-[100%] ml-auto p-3.5 grid grid-cols-12">
            <div class="w-[100%] col-span-6 lg:col-span-3">
              <Typography variant='h2' text='ULTRA' className='text-[#345097] font-semibold' />
              <Typography variant='body' className='mb-2' text='$0.00/month' />
            </div>
            <div class="w-[100%] col-span-6 lg:col-span-3 flex items-center">
              <Typography variant='h5' text='500.00 / month' className='text-[#345097] font-normal mr-3' />
              <Button text='Quota' className='bg-[#00b1ff21] px-2 py-0.5 text-[#482f9e] rounded-3xl' />
            </div>
            <div class="w-[100%] lg:col-span-2 col-span-4 flex items-center">
              <Button icon='/icons/add.svg' />
            </div>
            <div class="w-[100%] lg:col-span-2 col-span-4 flex items-center">
              <Button icon='/icons/add.svg' />
            </div>
            <div class="w-[100%] lg:col-span-2 col-span-4 flex items-center">
              <Button icon='/icons/add.svg' />
            </div>
          </div>
          <div className="border-b border-[#3b71ca] rounded-lg"></div>
          <div class="w-[100%] ml-auto p-3.5 grid grid-cols-12">
            <div class="w-[100%] col-span-6 lg:col-span-3">
              <Typography variant='h2' text='ULTRA' className='text-[#345097] font-semibold' />
              <Typography variant='body' className='mb-2' text='$0.00/month' />
            </div>
            <div class="w-[100%] col-span-6 lg:col-span-3 flex items-center">
              <Typography variant='h5' text='500.00 / month' className='text-[#345097] font-normal mr-3' />
              <Button text='Quota' className='bg-[#00b1ff21] px-2 py-0.5 text-[#482f9e] rounded-3xl' />
            </div>
            <div class="w-[100%] col-span-4  lg:col-span-2 flex items-center">
              <Button icon='/icons/add.svg' />
            </div>
            <div class="w-[100%] col-span-4  lg:col-span-2 flex items-center">
              <Button icon='/icons/add.svg' />
            </div>
            <div class="w-[100%] col-span-4  lg:col-span-2 flex items-center">
              <Button icon='/icons/add.svg' />
            </div>
          </div>
          <Button text='+ Add Object' className='w-[80%] mx-auto md:w-[97%] box-border md:mx-3.5 my-4 md:my-10 flex justify-center bg-[#00b1ff21] text-[#482f9e]' />

          <Typography variant='body' className='mb-2 mx-3.5' text='$0.00/month' />
          <div className="border-b border-[#3b71ca] rounded-lg"></div>
          <div className="bg-slate-200 mx-3.5 my-2 h-20 flex  justify-center items-center">
            <Typography variant='body' className=' ' text='$0.00/month' />
          </div>
          <Button text='+ Add Object' className='w-[80%] mx-auto md:w-[97%] box-border md:mx-3.5 my-5 flex justify-center bg-[#00b1ff21] text-[#482f9e]' />
        </div>
      </div>
    </SideBar>
  )
}
