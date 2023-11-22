import React, {useState} from "react";
import Button from "@/components/Button/Button";
import Typography from "@/components/Typegraphy/Typography";
import Tabs from "@/components/Tabs/tabs";
import HubListingLayout from "@/components/HubListingLayout/HubListingLayout";

const tabs = [
    {label: 'Public plans'},
    {label: 'Private plans'},
    {label: 'Transaction'},

]
export default function Home() {
    const [selectedOption, setSelectedOption] = useState('');
    const options = ['Option 1', 'Option 2', 'Option 3'];

    const handleSelect = (option) => {
        setSelectedOption(option);
    };
    return (
        <HubListingLayout>
            <div className="plan-wrapper mx-3 md:mx-10 mt-10">
                <div className="flex gap-2.5 mb-2">
                    <Tabs tabs={tabs}/>
                </div>
                <Typography
                    variant='body'
                    className='mb-10'
                    text='ElevateAPI supports 4 types of APIs pricing modules: free. pav per use. freemium and paid.'
                />
                <div className="border border-blue-500 rounded-xl p-4">
                    <div className="py-3 border-b border-blue-500 mb-3">
                        <Typography variant='body' className='mb-1 text-blue-500 font-bold' text='Requests'/>
                        <Typography variant='body' className='mb-3' text='A call to any endpoint is one Request'/>
                        <Typography variant='body' className='mb-1 text-blue-500 font-bold' text='Elevate-free-plans-hard-limit'/>
                        <Typography variant='body' className='mb-1' text='An object which will be applied only on free plans (this object is not visible to the consumers)'/>
                    </div>
                    <div className="flex justify-evenly items-center flex-wrap gap-3">
                        <div className="card border border-blue-500 p-6 rounded-2xl text-center w-full max-w-[280px] h-[300px] bg-blue-200 shadow-lg">
                            <Typography variant='h1' className='mb-3' text='BASIC' />
                            <Typography variant='small' text='$0.00/month' />
                            <Button className='mx-auto my-3 bg-white !text-blue-500 border border-blue-500 min-w-[80px]' text="Edit" />
                            <div className="w-full flex items-center justify-between py-2">
                                <Typography variant='small' className="mb-3 font-bold text-blue-500" text='Requests' />
                                <Typography variant='small' className="mb-3" text='500.00 / month' />
                            </div>
                            <div className="w-full flex items-center justify-between py-2">
                                <Typography variant='small' className="mb-3 font-bold text-blue-500" text='Hard-limit' />
                                <Typography variant='small' className="mb-3" text='500.00 / month' />
                            </div>
                        </div>
                        <div className="card border border-blue-500 p-6 rounded-2xl text-center w-full max-w-[280px] h-[300px] bg-blue-200 shadow-lg">
                            <Typography variant='h1' className='mb-3' text='PREMIUM' />
                            <Typography variant='small' text='$0.00/month' />
                            <Button className='mx-auto my-3 bg-white !text-blue-500 border border-blue-500 min-w-[80px]' text="Edit" />
                            <div className="w-full flex items-center justify-between py-2">
                                <Typography variant='small' className="font-bold text-blue-500" text='Requests' />
                                <Button text='Add' />
                            </div>
                            <div className="w-full flex items-center justify-between py-2">
                                <Typography variant='small' className="font-bold text-blue-500" text='Hard-limit' />
                                <Button text='Add' />
                            </div>
                        </div>
                        <div className="card border border-blue-500 p-6 rounded-2xl text-center w-full max-w-[280px] h-[300px] bg-blue-200 shadow-lg">
                            <Typography variant='h1' className='mb-3' text='PRO' />
                            <Typography variant='small' text='$0.00/month' />
                            <Button className='mx-auto my-3 bg-white !text-blue-500 border border-blue-500 min-w-[80px]' text="Edit" />
                            <div className="w-full flex items-center justify-between py-2">
                                <Typography variant='small' className="font-bold text-blue-500" text='Requests' />
                                <Button text='Add' />
                            </div>
                            <div className="w-full flex items-center justify-between py-2">
                                <Typography variant='small' className="font-bold text-blue-500" text='Hard-limit' />
                                <Button text='Add' />
                            </div>
                        </div>
                        <div className="card border border-blue-500 p-6 rounded-2xl text-center w-full max-w-[280px] h-[300px] bg-blue-200 shadow-lg">
                            <Typography variant='h1' className='mb-3' text='ULTRA' />
                            <Typography variant='small' text='$0.00/month' />
                            <Button className='mx-auto my-3 bg-white !text-blue-500 border border-blue-500 min-w-[80px]' text="Edit" />
                            <div className="w-full flex items-center justify-between py-2">
                                <Typography variant='small' className="font-bold text-blue-500" text='Requests' />
                                <Button text='Add' />
                            </div>
                            <div className="w-full flex items-center justify-between py-2">
                                <Typography variant='small' className="font-bold text-blue-500" text='Hard-limit' />
                                <Button text='Add' />
                            </div>
                        </div>
                    </div>
                    <Button
                            text='Add Object'
                            icon='/icons/add.svg'
                            className='mx-3.5 my-4 md:my-10 flex justify-center'
                        />
                        <Typography variant='body' className='mb-2 mx-3.5 font-bold text-blue-500' text='Features'/>
                        <div className="border-b border-blue-500 rounded-lg"/>
                        <div className="bg-blue-200 rounded-lg my-2 h-20 flex  justify-center items-center">
                            <Typography variant='body' text='You don’t have any features yet'/>
                        </div>
                        <Button
                            text='Add Object'
                            icon='/icons/add.svg'
                            className='mx-3.5 my-5 flex justify-center'
                        />
                </div>
            </div>
        </HubListingLayout>
    )
}
