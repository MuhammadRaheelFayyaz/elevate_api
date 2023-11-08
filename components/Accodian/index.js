import React, { useState } from 'react';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-200 p-2 mb-2">
      <div
        className="flex justify-between cursor-pointer"
        onClick={toggleAccordion}
      >
        <h2 className="text-lg font-semibold">{title}</h2>
        <svg
          className={`feather feather-chevron-down transform ${isOpen ? 'rotate-180' : 'rotate-0'} transition-transform`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
      {isOpen && (
        <div className="mt-2">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
