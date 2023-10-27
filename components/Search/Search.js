import React from 'react';
import Image from "next/image";

const SearchInput = ({onChange, value}) => {
    return (
        <div className="flex items-center space-x-2 relative">
            <input
                type="text"
                className="border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
                placeholder="Search..."
                value={value}
                onChange={onChange}
            />
            <button className="text-white py-2 px-4 rounded focus:outline-none absolute right-[1px]">
                <Image
                    src="/icons/search.svg"
                    height={20}
                    width={20}
                />
            </button>
        </div>
    );
};

export default SearchInput;
