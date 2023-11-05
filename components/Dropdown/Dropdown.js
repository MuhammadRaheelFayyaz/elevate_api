// components/Dropdown.js
import React, { useState } from 'react';

const Dropdown = ({ options, onSelect=()=>{}, placeholder, label, className }) => {
    const [open, setOpen]=useState(false)
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelect = (option) => {
        setSelectedOption(option);
        onSelect(option);
        setOpen(false)
    };

    return (
        <div className={`relative inline-block text-left w-full mb-4 ${className}`}>
            {label && <label className="block text-gray-700 mb-2">{label}</label>}
            <div>
                <button
                    type="button"
                    className="inline-flex justify-between w-full rounded-md border bg-white px-4 py-2 text-sm"
                    onClick={()=>setOpen(!open)}
                >
                    {selectedOption || placeholder}
                </button>
            </div>
            {open && <div
                className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 w-full">
                <div className="py-1 w-full" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    {options.map((option) => (
                        <button
                            key={option}
                            onClick={() => handleSelect(option)}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left w-full"
                            role="menuitem"
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </div>}
        </div>
    );
};

export default Dropdown;
