import React from 'react';

const RadioButton = ({ label, name, value, checked, onChange, className }) => {
    return (
        <label className={`flex items-center space-x-2 ${className}`}>
            <input
                type="radio"
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
                className="form-radio text-blue-500 h-5 w-5"
            />
            <span>{label}</span>
        </label>
    );
};

export default RadioButton;
