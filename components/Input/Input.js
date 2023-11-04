import React from 'react';

const Input = ({ type, id, label, placeholder, value, onChange, className, wrapperClassname }) => {
    return (
        <div className={`mb-4 w-full ${wrapperClassname}`}>
            {label && <label htmlFor={id} className="block text-gray-700  mb-2">
                {label}
            </label>}
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`border rounded p-2 w-full ${className}`}
            />
        </div>
    );
};

export default Input;
