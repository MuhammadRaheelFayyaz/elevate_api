import React from 'react';

const TabsNavbar = ({ tabs, selectedTab, setSelectedTab }) => {

  return (
    <div className='border-b-[1px] '>
        <ul className="flex list-none flex-wrap sm:flex-auto">
        {tabs.map((tab, index) => (
            <li
                key={tab}
                className={`py-4 px-2 border-b-2 cursor-pointer ${selectedTab === index ? "border-blue-500 text-blue-500": "border-transparent"}`}
                onClick={() => setSelectedTab(index)}
                >
                {tab}
            </li>
        ))}
        </ul>
    </div>
  );
};

export default TabsNavbar;