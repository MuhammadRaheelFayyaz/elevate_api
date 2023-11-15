import React, {useState} from 'react';

const Tabs = ({tabs, onTabSelect=(value)=>{}}) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
        if(onTabSelect){
            onTabSelect(index)
        }
    };
    return (
            <div className="flex flex-wrap gap-2 md:gap-1 ">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`p-2 md:py-2 md:px-4 text-[14px] text-gray-600 border rounded-md border-transparent  ${
                            index === activeTab
                                ? 'bg-blue-500 !text-blue-100 border border-blue-500'
                                : 'bg-blue-200 hover:border hover:border-blue-500'
                        }`}
                        onClick={() => handleTabClick(index)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

    );
};

export default Tabs;
