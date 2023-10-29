import React, { useState } from "react";
import SideBar from '@/components/Sidebar/LayoutWithSidebar'
import Button from "@/components/Button/Button";
import ToggleButton from "@/components/ToggleButton/Button";
import Input from "@/components/Input/Input";
import Textarea from "@/components/Textarea/textarea";
import Typography from "@/components/Typegraphy/Typography";
import Dropdown from "@/components/Dropdown/Dropdown";
import Image from 'next/image';
import RadioButton from "@/components/Radio/RadioButton";

export default function Home() {
  const [selectedOption, setSelectedOption] = useState('');
  const options = ['Option 1', 'Option 2', 'Option 3'];

  const handleSelect = (option) => {
    setSelectedOption(option);
  };
  return (
    <SideBar>
      <div className='mx-3 md:mx-10 md:w-[70%]  my-2 mt-8'>
        <Typography variant='h1' text='General Information' className=' mb-4 text-[#345097]' />
        <div className='flex  justify-between items-center flex-wrap my-8 max-w-2xl'>
          <div className='w-[80%] md:w-[30%] mb-0'>
            <Image
                src="/images/placeholder.jpg"
                width={150}
                height={70}
                className='overflow-hidden'
                alt="Picture of the author"
            />
          </div>
          <div className='w-[100%] md:w-[70%] mb-3 '>
            <Typography variant='h2' text='Drop File to Upload ' className=' mb-3 font-bold' />
            <Button text='Upload Logo' className='max-w-[200px] mb-2'/>
            <Typography variant='body' text='The gateway developers use to make request to the API' />
          </div>
        </div>
        <Typography variant='h2' text='Category' className='font-semibold mb-4' />
        <div class="max-w-[500px]">
        <Dropdown
          options={options}
          onSelect={handleSelect}
          placeholder={'select the item'}
          icon={'/icon/list.svg'}
        />
        </div>
      </div>
      <div className='mx-3 md:mx-10 max-w-[900px] my-3'>
        <Typography variant='h2' text='Category' className='font-semibold mb-4' />
        <Textarea placeholder='custom input' /> 
        <Typography variant='body' text='In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual' className=' mb-3' />
      </div>
      <div className='mx-3 md:mx-10 max-w-[900px] my-3'>
        <Typography variant='h2' text='Category' className='font-semibold mb-4' />
        <Textarea placeholder='custom input' /> 
        <Typography variant='body' text='In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual' className=' mb-3' />
      </div>
      <div className='mx-3 md:mx-10 max-w-[500px] my-3 mb-10  '>
        <Typography variant='h2' text='Category' className='font-semibold mb-4' />
        <Input  placeholder='https://'/>
      </div>
      <div className='mx-3 md:mx-10 max-w-[900px] my-3'>
        <Typography variant='h1' text='General Information' className=' mb-4 text-[#345097]' />
        <Typography variant='h2' text='Category' className='font-semibold mb-4' />
        <Textarea placeholder='custom input' /> 
        <Typography variant='body' text='In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual' className=' mb-3' />
      </div>
      <div className='mx-3 md:mx-10 max-w-[900px] my-3'>
        <Typography variant='h1' text='General Information' className=' mb-4 text-[#345097]' />
        <Typography variant='body' text='In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual' className=' mb-3' />
        <div className='max-w-[900px] my-3 flex flex-wrap border-2 border-[#3b71ca] rounded-lg'>
          <div className='w-[100%] md:w-[10%] py-5
          p-2.5 flex justify-center items-center bg-[#5a607142]'>
          <Image
              height={40}
              width={40}
              src='/icons/lock.svg'
          />
          </div>
          <div className='md:w-[90%] p-3.5 pb-8'>
            <Typography variant='h2' text='Category' className='font-semibold mb-2' />
            <Typography variant='body' text='In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual' className='' />
            <RadioButton
                label='Open Api'
                onChange={()=>console.log('...')}
                checked={true}
                value={true}
                name={'openApi'}
                className='mt-1 mb-6'
            />
            <ToggleButton />
          </div>
        </div>
      </div>
    </SideBar>
  )
}
