import Button from "@/components/Button/Button";
import Image from "next/image";
import Typography from "@/components/Typegraphy/Typography";
import Tabs from "@/components/Tabs/tabs";
import Card from "@/components/Crad/Card";
import ApiCard from "@/components/Crad/ApiCard";
import Navbar from "@/components/Navbar/Navbar";
import Table from "@/components/custom-table/Table";


const tabs=[
    {
        label:"Publish API('s)"
    },
    {
        label:"API('s) Following"
    },
    {
        label:"Followed By"
    },
    {
        label:"Following"
    },
]

const discussionTabs=[
    {
        label:"All"
    },
    {
        label:"Questions"
    },
    {
        label:"Answers"
    },
]

const columns = [
    { key: 'title', label: 'Title' },
    {key:'createdAt', label: 'Created At'}
];
const data = [
    { title: 'Item 1', createdAt: '2023-11-04' },
    { title: 'Item 2', createdAt: '2023-11-05' },
    { title: 'Item 3', createdAt: '2023-11-06' }
];


export default function User() {
    return (
       <div>
           <Navbar />
           <div className='w-full md:w-[70%] md:my-20  mx-auto'>
               <div className='flex flex-col md:flex-row p-4 md:p-0 justify-between mb-4'>
                   <div className='flex gap-4'>
                       <div className='w-[200px] md:h-[200px] rounded overflow-hidden '>
                           <Image
                               src={'/images/profile.jpeg'}
                               width={300}
                               height={300}
                           />
                       </div>
                       <div>
                           <Typography text='Muhammad Raheel' variant='h2' className='text-blue-500 cursor-pointer' />
                           <Typography text='raheelfayyazid@gamil.com' variant='h3' className='text-blue-500 cursor-pointer hover:underline ' />
                       </div>
                   </div>
                   <div className='mt-4 md:mt-0'>
                       <Button text='Edit' icon='/icons/edit.svg' className='w-[150px]'/>
                   </div>
               </div>
               <div className='mb-4'>
                   <Tabs tabs={tabs} />
               </div>
               <div>
                   <div className='flex gap-4 flex-wrap mb-8'>
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
               </div>

               <div className='flex justify-between md:items-center flex-col md:flex-row mb-4 p-2 md:p-0'>
                   <Typography text='Discussions 0'/>
                   <div className='mt-4 md:mt0'>
                       <Tabs tabs={discussionTabs} />
                   </div>
               </div>
               <div>
                   {/*discuustion table here*/}
                   <Table columns={columns} data={data} />
               </div>

           </div>
       </div>
    )
}
