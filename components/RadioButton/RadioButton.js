import React from 'react';

const Checkbox = ({ label, checked, onChange, disable=false, className }) => {
    return (
        <label className={`flex items-center space-x-2 ${disable === true ? "text-gray-400 cursor-not-allowed":""} ${className}`}>
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className="form-checkbox text-blue-500 h-5 w-5"
                disabled={disable}
            />
            <span>{label}</span>
        </label>
    );
};

export default Checkbox;
