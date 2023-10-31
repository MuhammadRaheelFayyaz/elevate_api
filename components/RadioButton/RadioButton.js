import React from 'react';

const Checkbox = ({ label, checked, onChange }) => {
    return (
        <label className="flex items-center space-x-2">
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className="form-checkbox text-blue-500 h-5 w-5"
            />
            <span>{label}</span>
        </label>
    );
};

export default Checkbox;
