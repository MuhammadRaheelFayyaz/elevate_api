// MobileDrawer.js
import React from "react";

const MobileDrawer = ({ isOpen, onClose, children }) => {
  const drawerClasses = isOpen
    ? "fixed inset-0 overflow-hidden z-50"
    : "hidden";

  return (
    <div className={drawerClasses}>
      <div
        className="absolute inset-0 bg-gray-800 opacity-75"
        onClick={onClose}
      ></div>
      <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex w-2/3">
        <div className="relative w-screen max-w-md">
          <div className="h-full bg-white shadow-xl overflow-y-scroll">
            <div className="py-6 px-4 sm:px-6">
              {/* {children} */}
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileDrawer;
