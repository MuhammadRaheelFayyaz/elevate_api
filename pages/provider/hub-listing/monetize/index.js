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
                    text='RapidAP supports 4 tvpes of APIs pricing modules: free. pav per use. freemium and paid.'
                />
                <div className="overflow-auto no-scrollbar border border-blue-500 rounded-lg">
                    <div className="tab-content w-full min-w-[1150px]">
                        <div
                            className="w-full ml-auto p-3.5 flex flex-wrap gap-4 justify-end border-b border-blue-500">
                            <div className="plans-card w-[200px] text-center">
                                {/*<ToggleButton />*/}
                                <Typography variant='h2' text='BASIC' className='text-blue-500 font-semibold mt-5'/>
                                <Typography variant='body' className='mb-3' text='$0.00/month'/>
                                <Button text='Edit' className='w-full !min-w-full flex justify-center mb-2 mx-auto'/>
                            </div>
                            <div className="plans-card w-[200px] text-center">
                                {/*<ToggleButton />*/}
                                <Typography variant='h2' text='PRO' className='text-blue-500 font-semibold mt-5'/>
                                <Typography variant='body' className='mb-3' text='$0.00'/>
                                <Button text='Edit' className='w-full !min-w-full flex justify-center mb-2 mx-auto'/>
                            </div>
                            <div className="plans-card w-[200px] text-center">
                                {/*<ToggleButton />*/}
                                <Typography variant='h2' text='ULTRA' className='text-blue-500 font-semibold mt-5'/>
                                <Typography variant='body' className='mb-3' text='$0.00/month'/>
                                <Button text='Edit' className='w-full !min-w-full flex justify-center mb-2 mx-auto'/>
                            </div>
                            <div className="plans-card w-[200px] text-center">
                                {/*<ToggleButton />*/}
                                <Typography variant='h2' text='ULTRA' className='text-blue-500 font-semibold mt-5'/>
                                <Typography variant='body' className='mb-3' text='$0.00/month'/>
                                <Button text='Edit' className='w-full !min-w-full flex justify-center mb-2 mx-auto'/>
                            </div>
                        </div>
                        {/*<Typography variant='body' className='mx-3.5 mb-1' text='Objects'/>*/}
                        <div className="w-full ml-auto p-3.5 flex justify-between gap-4 border-b border-blue-500">
                            <div className="w-full">
                                <Typography variant='h4' text='Requests' className='text-blue-500 font-semibold'/>
                                <Typography variant='body' className='mb-2' text='A call to any endpoint is one Request'/>
                            </div>
                            <div className="flex w-full gap-4">
                                <div className="flex items-center justify-center w-[200px]">
                                    <Typography variant='h5' text='500.00 / month' className='text-blue-500 font-normal'/>
                                </div>
                                <div className="flex items-center justify-center w-[200px]">
                                    <Button icon='/icons/add.svg'/>
                                </div>
                                <div className="flex items-center justify-center w-[200px]">
                                    <Button icon='/icons/add.svg'/>
                                </div>
                                <div className="flex items-center justify-center w-[200px]">
                                    <Button icon='/icons/add.svg'/>
                                </div>
                            </div>
                        </div>
                        <div className="w-full ml-auto p-3.5 gap-4 flex justify-between border-b border-blue-500">
                            <div className="w-full">
                                <Typography variant='h4' text='Elevate-free-plans-hard-limit' className='text-blue-500 font-semibold'/>
                                <Typography variant='body' className='mb-2' text='An object which will be applied only on free plans (this object is not visible to the consumers)'/>
                            </div>
                            <div className="flex w-full gap-4">
                                <div className="flex items-center justify-center w-[200px]">
                                    <Typography variant='h5' text='500.00 / month' className='text-blue-500 font-normal'/>
                                </div>
                                <div className="flex items-center justify-center w-[200px]">
                                    <Button icon='/icons/add.svg'/>
                                </div>
                                <div className="flex items-center justify-center w-[200px]">
                                    <Button icon='/icons/add.svg'/>
                                </div>
                                <div className="flex items-center justify-center w-[200px]">
                                    <Button icon='/icons/add.svg'/>
                                </div>
                            </div>
                        </div>
                        <Button
                            text='Add Object'
                            icon='/icons/add.svg'
                            className='w-[80%] box-border mx-3.5 my-4 md:my-10 flex justify-center bg-blue-500 text-[#482f9e]'
                        />
                        <Typography variant='body' className='mb-2 mx-3.5' text='Features'/>
                        <div className="border-b border-blue-500 rounded-lg"/>
                        <div className="bg-blue-200 rounded-lg mx-3.5 my-2 h-20 flex  justify-center items-center">
                            <Typography variant='body' text='You don’t have any features yet'/>
                        </div>
                        <Button
                            text='Add Object'
                            icon='/icons/add.svg'
                            className='box-border mx-3.5 my-5 flex justify-center bg-blue-500 text-[#482f9e]'
                        />
                    </div>
                </div>
            </div>
        </HubListingLayout>
    )
}
