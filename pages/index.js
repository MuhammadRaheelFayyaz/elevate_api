import React, {useState} from "react";
import SideBar from '@/components/Sidebar/LayoutWithSidebar'
import ApiCard from "@/components/Crad/ApiCard";
import Card from "@/components/Crad/Card";
import Navbar from "@/components/Navbar/Navbar";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import Typography from "@/components/Typegraphy/Typography";
import Dropdown from "@/components/Dropdown/Dropdown";
import Slider from "react-slick";
import CardSlider from "@/components/Slider/Slider";

export default function Home() {
    const [selectedOption, setSelectedOption] = useState('');
    const options = ['Option 1', 'Option 2', 'Option 3'];

    const handleSelect = (option) => {
        setSelectedOption(option);
    };
    return (
        <SideBar>
            <Navbar/>
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
            <div className='ml-10 w-[70%] bg-blue-300 my-8'>
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
            </div>
            <Card className='w-1/2 m-4'>
                <Typography variant='h1' text='Add Api' className='text-center mb-4'/>
                <Input label='Custom input' placeholder='custom input'/>
                <Dropdown
                    label='Dropdown label'
                    options={options}
                    onSelect={handleSelect}
                    placeholder="Select an option"
                />
                <Input label='Custom input' placeholder='custom input'/>
                <Input label='Custom input' placeholder='custom input'/>
                <Button text='Add Api' icon='/icons/add.svg'/>
            </Card>
        </SideBar>
    )
}
