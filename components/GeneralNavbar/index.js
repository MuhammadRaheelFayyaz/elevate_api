import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";
import openInNew from "../../public/icons/openInNew.svg"
import React, { useState } from 'react';

const navItems = ["General", "Definitions", "Docs", "Gateway", "Comunity", "monetize"]
const dropdownOptions = ["v1 (default)", "v2"]

const GeneralNavbar  = ()=>{
    const [selectedItem, setSelectedItem] = useState(0);

    return(
        <div className="bg-white sm:px-6 border-b-[1px] flex justify-between items-center gap-3 flex-wrap">
            <ul className="flex list-none flex-wrap sm:flex-auto">
                {
                    navItems.map((item, index)=>{
                        return <li className={`py-4 px-2 border-b-2 cursor-pointer ${selectedItem === index ? "border-blue-500 text-blue-500": "border-transparent"}`} onClick={()=>setSelectedItem(index)}>{item}</li>
                    })
                }
            </ul>
            <div className="flex items-center gap-2">
                <Dropdown options={dropdownOptions} className="w-[230px] min-w-[150px] !mb-0" onSelect={(option)=>console.log(option)} placeholder='v1 (default)'/>
                <Button text="View in Hub" className="!text-black flex-row-reverse gap-1 hover:bg-gray-200 bg-white" icon={openInNew}/>
            </div>
        </div>
    )
}

export default GeneralNavbar;