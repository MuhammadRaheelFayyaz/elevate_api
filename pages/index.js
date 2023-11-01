import React, {useState} from "react";
import SideBar from '@/components/Sidebar/LayoutWithSidebar'
import Button from "@/components/Button/Button";
// import ToggleButton from "@/components/ToggleButton/Button";
import Typography from "@/components/Typegraphy/Typography";
import Tabs from "@/components/Tabs/tabs";
import PageLayout from "@/components/PageLayout/PageLayout";
const tabs=[
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
            <div>Children</div>
        </PageLayout>
    )
}
