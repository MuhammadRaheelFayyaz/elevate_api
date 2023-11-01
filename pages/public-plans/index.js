import React, {useState} from "react";
import Button from "@/components/Button/Button";
import Typography from "@/components/Typegraphy/Typography";
import Tabs from "@/components/Tabs/tabs";
import PageLayout from "@/components/HubLayout/HubLayout";

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
        <PageLayout>
            <div className="plan-wrapper mx-3 md:mx-10 mt-10">
                <div className="flex gap-2.5 mb-2">
                    <Tabs tabs={tabs}/>
                </div>
                <Typography
                    variant='body'
                    className='mb-10'
                    text='RapidAP supports 4 tvpes of APIs pricing modules: free. pav per use. freemium and paid.'
                />
                <div className="tab-content border border-blue-500 rounded-lg">
                    <div
                        className="w-full ml-auto p-3.5 flex flex-wrap gap-4 md:gap-6 justify-center border-b border-blue-500">
                        <div className="plans-card w-full max-w-[200px] align-center text-center">
                            {/*<ToggleButton />*/}
                            <Typography variant='h2' text='BASIC' className='text-blue-500 font-semibold mt-5'/>
                            <Typography variant='body' className='mb-2' text='$0.00/month'/>
                            <Button text='Edit' className='max-w-[200px] w-full flex justify-center mb-2 mx-auto'/>
                        </div>
                        <div className="plans-card w-full max-w-[200px] align-center text-center">
                            {/*<ToggleButton />*/}
                            <Typography variant='h2' text='PRO' className='text-blue-500 font-semibold mt-5'/>
                            <Typography variant='body' className='mb-2' text='$0.00'/>
                            <Button text='Edit' className='max-w-[200px] w-full flex justify-center mb-2 mx-auto'/>
                        </div>
                        <div className="plans-card w-full max-w-[200px] align-center text-center">
                            {/*<ToggleButton />*/}
                            <Typography variant='h2' text='ULTRA' className='text-blue-500 font-semibold mt-5'/>
                            <Typography variant='body' className='mb-2' text='$0.00/month'/>
                            <Button text='Edit' className='max-w-[200px] w-full flex justify-center mb-2 mx-auto'/>
                        </div>
                        <div className="plans-card w-full max-w-[200px] align-center text-center">
                            {/*<ToggleButton />*/}
                            <Typography variant='h2' text='ULTRA' className='text-blue-500 font-semibold mt-5'/>
                            <Typography variant='body' className='mb-2' text='$0.00/month'/>
                            <Button text='Edit' className='max-w-[200px] w-full flex justify-center mb-2 mx-auto'/>
                        </div>
                    </div>
                    {/*<Typography variant='body' className='mx-3.5 mb-1' text='Objects'/>*/}
                    <div className="w-full ml-auto p-3.5 grid grid-cols-12 border-b border-blue-500">
                        <div className="w-full col-span-8 lg:col-span-3">
                            <Typography variant='h4' text='Requests' className='text-blue-500 font-semibold'/>
                            <Typography variant='body' className='mb-2' text='A call to any endpoint is one Request'/>
                        </div>
                        <div className="w-full col-span-4 lg:col-span-3 flex items-center">
                            <Typography variant='h5' text='500.00 / month' className='text-blue-500 font-normal mr-3'/>
                        </div>
                        <div className="w-full lg:col-span-2 col-span-4 ">
                            <Button icon='/icons/add.svg'/>
                            <Typography variant='body' text='PRO'/>
                        </div>
                        <div className="w-full lg:col-span-2 col-span-4 ">
                            <Button icon='/icons/add.svg'/>
                            <Typography variant='body' text='ULTRA'/>
                        </div>
                        <div className="w-full lg:col-span-2 col-span-4 ">
                            <Button icon='/icons/add.svg'/>
                            <Typography variant='body' text='MEGA'/>
                        </div>
                    </div>
                    <div className="w-full ml-auto p-3.5 grid grid-cols-12">
                        <div className="w-full col-span-8 lg:col-span-3">
                            <Typography variant='h4' text='Rapid-free-plans-hard-limit'
                                        className='text-blue-500 font-semibold'/>
                            <Typography variant='body' className='mb-2'
                                        text='An object which will be applied only on free plans (this object is not visible to the consumers)'/>
                        </div>
                        <div className="w-full col-span-4 lg:col-span-3 flex items-center">
                            <Typography variant='h5' text='500.00 / month' className='text-blue-500 font-normal mr-3'/>
                        </div>
                        <div className="w-full lg:col-span-2 col-span-4 ">
                            <Button icon='/icons/add.svg'/>
                            <Typography variant='body' text='PRO'/>
                        </div>
                        <div className="w-full lg:col-span-2 col-span-4 ">
                            <Button icon='/icons/add.svg'/>
                            <Typography variant='body' text='ULTRA'/>
                        </div>
                        <div className="w-full lg:col-span-2 col-span-4 ">
                            <Button icon='/icons/add.svg'/>
                            <Typography variant='body' text='MEGA'/>
                        </div>
                    </div>
                    <Button
                        text='Add Object'
                        icon='/icons/add.svg'
                        className='w-[80%] mx-auto md:w-[97%] box-border md:mx-3.5 my-4 md:my-10 flex justify-center bg-blue-500 text-[#482f9e]'
                    />
                    <Typography variant='body' className='mb-2 mx-3.5' text='Features'/>
                    <div className="border-b border-blue-500 rounded-lg"/>
                    <div className="bg-slate-200 mx-3.5 my-2 h-20 flex  justify-center items-center">
                        <Typography variant='body' text='You don’t have any features yet'/>
                    </div>
                    <Button
                        text='Add Object'
                        icon='/icons/add.svg'
                        className='w-[80%] mx-auto md:w-[97%] box-border md:mx-3.5 my-5 flex justify-center bg-blue-500 text-[#482f9e]'
                    />
                </div>
            </div>
        </PageLayout>
    )
}
