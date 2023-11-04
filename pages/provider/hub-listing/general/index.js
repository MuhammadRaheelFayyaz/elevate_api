import React, {useState} from "react";
import SideBar from '@/components/Sidebar/LayoutWithSidebar'
import Button from "@/components/Button/Button";
// import ToggleButton from "@/components/ToggleButton/Button";
import Input from "@/components/Input/Input";
import Textarea from "@/components/TextArea/textArea";
import Typography from "@/components/Typegraphy/Typography";
import Dropdown from "@/components/Dropdown/Dropdown";
import Image from 'next/image';
import Checkbox from "@/components/RadioButton/RadioButton";
import HubListingLayout from "@/components/HubListingLayout/HubListingLayout";

export default function Home() {
    const [selectedOption, setSelectedOption] = useState('');
    const options = ['Option 1', 'Option 2', 'Option 3'];
    const options2 = ['v1 Current', 'Manage Versions'];

    const handleSelect = (option) => {
        setSelectedOption(option);
    };
    return (
       <HubListingLayout>
         <div className='mx-3 md:mx-10 md:w-[70%]  my-2 mt-8'>
           <Typography variant='h1' text='General Information' className='mb-4 text-blue-500'/>
           <div className='flex gap-5 items-center flex-wrap my-8 max-w-2xl'>
               <Image
                 src="/images/logo.webp"  
                 width={150}
                 height={70}
                 className='overflow-hidden'
                 alt="Picture of the author"
               />
             <div className=' mb-3'>
               <Typography variant='h2' text='Drop File to Upload' className='mb-3 font-bold'/>
               <Button text='Upload Logo' className='max-w-[200px] mb-2'/>
               <Typography variant='body' text='The gateway developers use to make request to the API'/>
             </div>
           </div>
           <div className="max-w-[500px]">
             <Dropdown
               options={options}
               onSelect={handleSelect}
               placeholder={'select the item'}
               label='Category'
             />
           </div>
         </div>
         <div className='mx-3 md:mx-10 max-w-[900px] my-3'>
           {/*<Typography variant='h3' text='Category' className='mb-4'/>*/}
           <Textarea placeholder='custom input' label='Short Description'/>
           <Typography
             variant='body'
             text="Describe the API in a few plain text words. Used for the API's card on the API Hub and at the top of the API listing's Endpoints tab.s"
             className='mb-3'
           />
         </div>
         <div className='mx-3 md:mx-10 max-w-[900px] my-3'>
           {/*<Typography variant='h3' text='Category' className='mb-4'/>*/}
           <Textarea placeholder='custom input' label='Long Description (optional)'/>
           <Typography
             variant='body'
             text="Describe your API in more detail. Markdown is accepted. This will appear below the short description on the API listing's Endpoints tab. Use the Docs tab to provide additional API information on the API listing's About tab."
             className='mb-3'
           />
         </div>
         <div className='mx-3 md:mx-10 max-w-[500px] my-3 mb-10  '>
           {/*<Typography variant='h2' text='Category' className='mb-4'/>*/}
           <Input placeholder='https://' label='Website (optional)'/>
         </div>
         <div className='mx-3 md:mx-10 max-w-[900px] my-3'>
           <Typography variant='h2' text='Additional Information' className='mb-4 text-blue-500'/>
           {/*<Typography variant='h3' text='Category' className='mb-4'/>*/}
           <Textarea placeholder='custom input' label='Terms of Use (optional)'/>
           <Typography
             variant='body'
             text='In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual'
             className='mb-3'
           />
         </div>
         <div className='mx-3 md:mx-10 max-w-[900px] my-3'>
           <Typography variant='h2' text='Visibility' className=' mb-4 text-blue-500'/>
           <Typography
             variant='body'
             text='Switching your API visibility to Public makes it searchable and accessible to everyone on the API Hub.'
             className='mb-3'
           />
           <div className='max-w-[900px] my-3 flex flex-wrap border-2 border-[#3b71ca] rounded-lg'>
             <div className='w-[100%] md:w-[10%] py-5 p-2.5 flex justify-center items-center bg-[#5a607142]'>
               <Image
                 height={40}
                 width={40}
                 src='/icons/lock.svg'
               />
             </div>
             <div className='md:w-[90%] p-3.5 pb-8'>
               <Typography variant='h3' text='API Project is Private' className='mb-2'/>
               <Typography
                 variant='h4'
                 text='"It’s not visible on the Hub and new users can’t access it'
                 className=''/>
               <Checkbox checked={true}
                         label="I confirm that I own or have rights to publish this API according to the RapidAPI Terms of Service"/>

               {/* <ToggleButton /> */}
             </div>
           </div>
         </div>
         <div className='mx-3 md:mx-10 max-w-[900px] my-3 border border-gray-400 overflow-hidden rounded-lg'>
            <div className="flex items-center flex-wrap gap-1 p-3 bg-gray-100">
              <img src="/icons/info.svg" alt="info" />
              <Typography text='Version Specific' className='min-w-fit' variant='h3'/>
              <Typography text='Changes will apply only to' className='min-w-fit' variant='small'/>
              <Dropdown options={options2} onSelect={handleSelect} className='!mb-0 max-w-[180px] min-w-[180px]' placeholder={'Version v1 Current'} />
            </div>
            <div className="p-4">
              <Typography variant='h3' className='mb-3' text='Base URL' />
              <Typography variant='small' className='mb-4' text='Add a base URL, configure multiple URLs, override URLs, and select a load balancer' />
              <Typography variant='h4' className='mb-4' text='URL' />
              <div className="border-b-[1px] border-gray-300">
                <div className="flex items-center gap-3 py-2 border-t-[1px] border-gray-300">
                  <Input placeholder='https://' wrapperClassname='!mb-0' />
                  <img src="/icons/delete.svg" alt="delete" />
                </div>
              </div>
              <Button text='Add URL' className='bg-white !text-blue-500 mt-3' icon='/icons/plusBlue.svg' />
            </div>
         </div>
         <div className="flex gap-2 border-t-[1px] bg-white border-gray-300 px-10 py-3 sticky bottom-0 left-0">
            <Button text="Save" />
            <Button text="Discard" className="bg-white !text-black border" />
          </div>
       </HubListingLayout>
    )
}
