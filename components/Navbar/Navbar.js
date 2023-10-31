// components/Navbar.js
import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-blue-500 border-b border-blue-500 p-4">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div className="text-white text-2xl font-semibold hidden md:block">Your Logo</div>
                    <ul className="flex gap-4">
                        <li className='border-b border-blue-white cursor-pointer'>
                            <a href="#" className="text-white hover:underline cursor-pointer">Home</a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:underline cursor-pointer">About</a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:underline cursor-pointer">Services</a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:underline cursor-pointer">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
