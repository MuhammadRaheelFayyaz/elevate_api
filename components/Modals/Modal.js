import React from 'react';
import Image from "next/image";

const Modal = ({isOpen, onClose, children}) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
            <div className="modal-overlay absolute inset-0 bg-gray-700 opacity-50"></div>
            <div className="modal-container bg-white w-full md:w-1/2 p-4 rounded z-20 relative rounded">
                <div
                    className="modal-close absolute top-0 right-0 p-4 text-gray-600 cursor-pointer top-[10px]"
                    onClick={onClose}
                >
                    <Image
                        height={20}
                        width={20}
                        src='/icons/close.svg'
                    />
                </div>
                <div className="modal-content">{children}</div>
            </div>
        </div>
    );
};

export default Modal;
