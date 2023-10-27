// components/LayoutWithSidebar.js
import React from 'react';

import SideBar from "@/components/Sidebar/SideBar";

const LayoutWithSidebar = ({children}) => {

    return (
        <div className="flex">
            <SideBar />
            <main className="w-full md:w-4/5">
                {children}
            </main>
        </div>
    );
};

export default LayoutWithSidebar;
