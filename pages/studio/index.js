import Navbar from "@/components/Navbar/Navbar";
import Typography from "@/components/Typegraphy/Typography";
import SearchInput from "@/components/Search/Search";
import Tabs from "@/components/Tabs/tabs";
import Button from "@/components/Button/Button";
import Card from "@/components/Crad/Card";
import ApiCard from "@/components/Crad/ApiCard";
import Modal from "@/components/Modals/Modal";
import AddAPI from "@/components/Modals/AddApi";
import React, {useState} from "react";
import {useRouter} from "next/router";
import UserDropdown from "@/components/UserDropdown";


const tabs = [
    { label: 'All', content: 'Content for Tab 1' },
    { label: 'Favorites', content: 'Content for Tab 2' },
];

const options = [
    { name: 'John Doe', avatar: '/images/profile.jpeg', accountType:"Personal Account" },
    { name: 'All Projects', avatar: '/icons/team.svg' },
];
export default function Studio(){
    const [isOpen, setIsOpen]=useState(false)
    const [search, setSearch]=useState('')
    const router=useRouter()
    const cardClick=()=>{
        router.push('/provider')
    }
    return (
        <div>
            <Navbar />
            <div className='p-4'>
                <div className='flex justify-between flex-col md:flex-row md:items-center gap-2'>
                    <div className='w-full md:w-1/2 flex flex-col md:flex-row md:gap-2 md:items-center'>
                       <div className='w-1/3'>
                           <UserDropdown options={options} onSelect={(option) => console.log(option)} placeholder="Select a person"/>
                       </div>
                        <div className='mt-4 md:mt-0'>
                            <SearchInput value={search} onChange={(e)=>setSearch(e.target.value)} />
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 flex items-center justify-between mt-4 md:mt-0'>
                        <div className='flex'>
                            <Tabs tabs={tabs} />
                        </div>
                        <div className='ml-auto'>
                            <Button text='Add Api' onClick={()=>setIsOpen(true)} icon='/icons/add.svg' />
                        </div>
                    </div>
                </div>
                <div className='flex gap-4 justify-center flex-wrap mt-4'>
                    <Card className='w-full md:w-[300px] lg:w-[23%]'>
                        <ApiCard onClick={cardClick}/>
                    </Card>
                    <Card className='w-full md:w-[300px] lg:w-[23%]'>
                        <ApiCard onClick={cardClick}/>
                    </Card>
                    <Card className='w-full md:w-[300px] lg:w-[23%]'>
                        <ApiCard onClick={cardClick}/>
                    </Card>
                    <Card className='w-full md:w-[300px] lg:w-[23%]'>
                        <ApiCard onClick={cardClick}/>
                    </Card>
                    <Card className='w-full md:w-[300px] lg:w-[23%]'>
                        <ApiCard onClick={cardClick}/>
                    </Card>
                    <Card className='w-full md:w-[300px] lg:w-[23%]'>
                        <ApiCard onClick={cardClick}/>
                    </Card>
                </div>
            </div>
            <Modal isOpen={isOpen} onClose={()=>setIsOpen(false)}>
                <AddAPI onCancel={()=>setIsOpen(false)} onApply={()=>setIsOpen(false)} />
            </Modal>
        </div>
    )
}
