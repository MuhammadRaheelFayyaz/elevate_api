import React from 'react';
import Image from 'next/image';

const Button = ({ text, icon, onClick, className }) => {
    return (
        <button
            className={`flex items-center bg-blue-500 text-white px-3 py-1.5 rounded-full text-sm w-full min-w-fit ${className}`}
            onClick={onClick}
        >
            {icon && (
                <div className={text&& 'mr-2'}>
                    <Image src={icon} alt="Button Icon" width={24} height={24} />
                </div>
            )}
            {text &&<>{text}</>}
        </button>
    );
};

export default Button;
