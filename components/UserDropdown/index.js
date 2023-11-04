// components/Dropdown.js
import React, { useState } from 'react';

const UserDropdown = ({ options, onSelect, placeholder, label, className }) => {
    const [open, setOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(options[0] || null);

    const handleSelect = (option) => {
        setSelectedOption(option);
        onSelect(option);
        setOpen(false);
    };

    return (
        <div className={`relative inline-block text-left w-full mx-auto ${className}`}>
            {label && <label className="block text-gray-700 mb-2">{label}</label>}
            <div>
                <button
                    type="button"
                    className="inline-flex justify-between w-full rounded-md border bg-white px-4 py-2 text-sm"
                    onClick={() => setOpen(!open)}
                >
                    <div className='flex'>
                        <img src={selectedOption.avatar} alt="Avatar" className="w-6 h-6 mr-2 rounded-full" />
                        {selectedOption.name}
                    </div>
                   <img src="/icons/downArrow.svg" className='w-5 h-5' alt="DownArrow" />
                </button>
            </div>
            {open && (
                <div className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 w-full">
                    <div className="py-1 w-full" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {options.map((option) => (
                            <button
                                key={option.name}
                                onClick={() => handleSelect(option)}
                                className="flex items-center gap-1 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                role="menuitem"
                            >
                                <img src={option.avatar} alt="Avatar" className="w-6 h-6 mr-2 rounded-full cover" />
                                <div>
                                    {option.accountType && <p className='text-[12px]'>{option.accountType}</p>}
                                    {option.name}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserDropdown;
