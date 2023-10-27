import React, {useState} from 'react';

const Tabs = ({tabs}) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className="p-4">
            <div className="flex">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`py-2 px-4 text-gray-600  ${
                            index === activeTab
                                ? 'bg-blue-500 text-blue-100 border border-blue-500'
                                : 'bg-blue-100 hover:border hover:border-blue-500'
                        }`}
                        onClick={() => handleTabClick(index)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

        </div>
    );
};

export default Tabs;
