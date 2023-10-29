import React, { useState } from "react";
import SideBar from '@/components/Sidebar/LayoutWithSidebar';
import Card from "@/components/Crad/Card";
import Button from "@/components/Button/Button";
import ToggleButton from "@/components/ToggleButton/Button";
import Input from "@/components/Input/Input";
import Typography from "@/components/Typegraphy/Typography";
import Dropdown from "@/components/Dropdown/Dropdown";

export default function Home() {
  const [selectedOption, setSelectedOption] = useState('');
  const options = ['Option 1', 'Option 2', 'Option 3'];

  const handleSelect = (option) => {
    setSelectedOption(option);
  };
  return (
    <SideBar>
      {/* <Navbar/>
            <div className='flex gap-4 justify-center flex-wrap mt-4'>
                <Card className='w-full md:min-w-[300px] lg:w-[23%]'>
                    <ApiCard/>
                </Card>
                <Card className='w-full md:min-w-[300px] lg:w-[23%]'>
                    <ApiCard/>
                </Card>
                <Card className='w-full md:min-w-[300px] lg:w-[23%]'>
                    <ApiCard/>
                </Card>
                <Card className='w-full md:min-w-[300px] lg:w-[23%]'>
                    <ApiCard/>
                </Card>
                <Card className='w-full md:min-w-[300px] lg:w-[23%]'>
                    <ApiCard/>
                </Card>
                <Card className='w-full md:min-w-[300px] lg:w-[23%]'>
                    <ApiCard/>
                </Card>
            </div>

            <div className='ml-10   w-[70%] bg-blue-300 my-8'>
                <CardSlider
                >
                    {
                        Array.from({length: 10}).map(item => (
                            <Card className='w-full md:min-w-[300px] lg:w-[23%]' key={item}>
                                <ApiCard/>
                            </Card>
                        ))
                    }
                </CardSlider>
            </div>  */}
      {/* <Card className='w-1/2 m-4'>
        <Typography variant='h1' text='Add Api' className='text-center mb-4 ' />
        <Input label='Custom input' placeholder='custom input' />
        <Dropdown
          label='Dropdown label'
          options={options}
          onSelect={handleSelect}
          placeholder="Select an option"
        />
        <Input label='Custom input' placeholder='custom input' />
        <Input label='Custom input' placeholder='custom input' />
        <Button text='Add Api' icon='/icons/add.svg' />
      </Card> */}
      <div className='mx-3 md:mx-10 w-[70%]  my-8'>
        <Typography variant='h1' text='Gateway DNS' className=' mb-4 text-[#345097]' />
        <Typography variant='h4' text='The gateway developers use to make request to the API ' className=' mb-10' />
        <Dropdown
          options={options}
          onSelect={handleSelect}
          placeholder={'select the item'}
          icon={'/icon/list.svg'}
        />
      </div>
      <div className='mx-3 md:mx-10 md:w-[70%]  my-8'>
        <Typography variant='h1' text='Firewall Setting' className=' mb-4 text-[#345097]' />
        <Typography variant='body' text='In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder ' className=' mb-10' />
        <Typography variant='h2' text='X-PROXY_SECRET' className=' mb-3' />
        <div className=' w-[100%]  flex justify-between  items-center'>
          <div className='w-[70%] md:w-[80%]  mb-0'>
            <Input placeholder='custom input' />
          </div>
          <div className='w-[20%] md:w-[10%]  mb-3 '>
            <Button text='copy' className='w-full justify-center' />
          </div>
        </div>
        <Typography variant='body' text='In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual' className=' mb-10' />
      </div>
      <div class="max-w-5xl">
      <div className='mx-3 md:mx-10   my-8 mb-20'>
        <Typography variant='h1' text='Firewall Setting' className=' mb-6 text-[#345097]' />
        <Card className='m-0 flex  justify-between items-center'>
          <div className=' w-[90%]  mb-3 '>
            <Typography variant='h2' text='Firewall Setting' className=' mb-4 font-semibold ' />
            <Typography variant='body' text='In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual' className=' mb-4' />
          </div>
          <div className=' w-[7%]  mb-3 '>
            <ToggleButton />
          </div>
        </Card>
      </div>
      <div className='mx-3 md:mx-10   my-8'>
        <Typography variant='h1' text='Firewall Setting' className=' mb-6 text-[#345097]' />
        <Card className='m-0 flex  justify-between items-center'>
          <div className=' w-[90%]  mb-3 '>
            <Typography variant='h2' text='Firewall Setting' className=' mb-4 font-semibold ' />
            <Typography variant='body' text='In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual' className=' mb-4' />
          </div>
          <div className=' w-[7%]  mb-3 '>
            <ToggleButton />
          </div>
        </Card>
      </div>
      <div className='mx-3 md:mx-10 my-8'>
        <Typography variant='h1' text='Firewall Setting' className=' mb-6 text-[#345097]' />
        <Card className='m-0'>
          <div className=' flex  justify-between items-center '>
            <div className='w-[100%] md:w-[50%]  mb-3 '>
              <Typography variant='h2' text='Firewall Setting' className=' mb-4 font-semibold ' />
              <Typography variant='body' text='In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual' className=' mb-4' />
            </div>
            <div className=' w-[100%] md:w-[30%]  mb-3 flex   justify-between '>
              <div className=' md:w-[60%] '>
                <Input label={false} placeholder='custom input' />
                <Typography variant='body' text='max value in mb' className=' mb-4 text-[#30363da1]' />
              </div>
              <div className=' w-[37%]  '>
                <Dropdown
                  className="mb-0"
                  options={options}
                  onSelect={handleSelect}
                  placeholder={'MB'}
                  icon={'/icon/list.svg'}
                />
              </div>
           
            </div>
          
            </div>
        </Card>
        <Card className='  mt-10'>
          <div className=' flex  justify-between items-center flex-wrap'>
            <div className=' w-[100%] md:w-[50%]  mb-3 '>
              <Typography variant='h2' text='Proxy Timeout' className=' mb-4 font-semibold text-[#30363da1' />
              <Typography variant='body' text='In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual' className=' mb-4' />
            </div>
            <div className=' w-[100%] md:w-[60%]  mb-3 flex   justify-between items-center flex-wrap'>
              <div className=' w-[60%] ml-auto '>
                <Input  placeholder='custom input' />
              <Typography variant='body' text='max value in mb' className=' mb-4' />
              </div>
            </div>
            </div>
        </Card>
      </div>
      </div>




    </SideBar>
  )
}
