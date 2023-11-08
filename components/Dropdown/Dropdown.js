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
                    className="inline-flex justify-between items-center w-full rounded-md border overflow-hidden bg-white px-4 py-2 text-sm"
                    onClick={()=>setOpen(!open)}
                >
                    {selectedOption || placeholder}
                    <img src="/icons/downArrow.svg" className='w-5 h-5' alt="Down arrow" />
                </button>
            </div>
            {open && <div
                className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 w-full z-10">
                <div className="py-1 w-full" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    {options.map((option) => (
                        <button
                            key={option}
                            onClick={() => handleSelect(option)}
                            className="block px-4 py-2 text-sm text-gray-700 overflow-hidden hover:bg-gray-100 text-left w-full"
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
