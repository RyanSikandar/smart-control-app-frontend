import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='flex flex-row justify-between px-40 py-4 text-white bg-[#5C8D89] font-bold border-b-2 border-gray-400 text-center'>
            <div className="text-2xl">
                <h1>Smart Facility Management System (SFMS)</h1>
            </div>
            <ul className="flex flex-row gap-8 font-bold">
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/services">SERVICES</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
                <li><Link to="/login">LOGIN</Link></li>
                <li><Link to="/register">REGISTER</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
