import Navbar from "@/components/Navbar/Navbar";
import Typography from "@/components/Typegraphy/Typography";
import SearchInput from "@/components/Search/Search";
import Tabs from "@/components/Tabs/tabs";
import Button from "@/components/Button/Button";
import Card from "@/components/Crad/Card";
import ApiCard from "@/components/Crad/ApiCard";
import Modal from "@/components/Modals/Modal";
import AddAPI from "@/components/Modals/AddApi";
import {useState} from "react";


const tabs = [
    { label: 'All', content: 'Content for Tab 1' },
    { label: 'Favorites', content: 'Content for Tab 2' },
];
export default function Studio(){
    const [isOpen, setIsOpen]=useState(false)
    return (
        <div className='w-full'>
            <Navbar />
            <div className='p-4'>
                <div className='flex justify-between items-center'>
                    <div className='w1/3 flex gap-8 items-center '>
                       <div className='flex'>
                           <Typography variant='h4' text='Personal' className='text-blue-500 border-b border-blue-500 cursor-pointer mx-1'  />
                           <div>/</div>
                           <Typography variant='h4' text='All Projects' className='cursor-pointer mx-1 hover:text-blue-500 hover:border-b hover:border-blue-500'  />
                       </div>
                            <SearchInput value='' onChange={()=>console.log('something')} />
                    </div>
                    <div className='w1/3 flex'>
                       <Tabs tabs={tabs} />
                    </div>
                    <div className='w1/3'>
                        <Button text='Add Api' onClick={()=>setIsOpen(true)} icon='/icons/add.svg' />
                    </div>
                </div>
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
            </div>
            <Modal isOpen={isOpen} onClose={()=>setIsOpen(false)}>
                <AddAPI onCancel={()=>setIsOpen(false)} />
            </Modal>
        </div>
    )
}
