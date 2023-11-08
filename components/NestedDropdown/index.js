// components/NestedDropdown.js
import React, {useRef, useState} from 'react';

const NestedDropdown = ({ options, onSelect = () => {}, placeholder, label, className }) => {
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Node.js');
  const [hoveredOption, setHoveredOption] = useState(null);
  const ref=useRef(null)
  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setOpen(false);
  };

  const handleHover = (option) => {
    setHoveredOption(option);
  };

  return (
    <div className={`relative inline-block text-left w-full mb-4 ${className}`} ref={ref}>
      {label && <label className="block text-gray-700 mb-2">{label}</label>}
      <div>
        <button
          type="button"
          className="inline-flex justify-between items-center w-full rounded-md border overflow-hidden bg-white px-4 py-2 text-sm"
          onClick={() => setOpen(!open)}
        >
          {selectedOption || placeholder}
          <img src="/icons/downArrow.svg" className='w-5 h-5' alt="Down arrow" />
        </button>
      </div>
      {open && (
        <div className="origin-top-right h-[400px] overflow-scroll absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 w-full z-10">
          <div className="py-1 w-full" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {options.map((option) => (
              <div key={option.label}>
                <button
                  onClick={() => handleSelect(option.label)}
                  onMouseEnter={() => handleHover(option)}
                  className={`block px-4 py-2 text-sm text-gray-700 overflow-hidden hover:bg-gray-100 text-left w-full ${
                    selectedOption === option.label ? 'bg-gray-200' : ''
                  }`}
                  role="menuitem"
                >
                  {option.label}
                </button>
                {hoveredOption === option && option.suboptions && (
                  <div className="absolute right-0 mt-0 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 w-48 z-20">
                    {option.suboptions.map((suboption) => (
                      <button
                        key={suboption}
                        onClick={() => handleSelect(suboption)}
                        className={`block px-4 py-2 text-sm text-gray-700 overflow-hidden hover:bg-gray-100 text-left w-full ${
                          selectedOption === suboption ? 'bg-gray-200' : ''
                        }`}
                        role="menuitem"
                      >
                        {suboption}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NestedDropdown;
