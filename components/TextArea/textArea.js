import React from 'react';

const TextArea = ({ label, value, onChange, placeholder, rows }) => {
    return (
        <div className="mb-4">
            {label && <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>}
            <textarea
                className="resize-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                rows={rows || 4}
            />
        </div>
    );
};

export default TextArea;
