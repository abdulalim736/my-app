import Image from 'next/image';
import React from 'react';
import logo from '@/assets/logo.png';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm flex justify-between items-center container mx-auto px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><button>Worksout</button></li>

                        <li><button>Myplan</button></li>
                    </ul>
                </div>
                <div className='flex gap-2'>
                    <Image src={logo} alt="logo" />
                    <p className='text-2xl font-bold'>FITLOG</p>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                    <li><button className='text-[rgb(187,241,10)] text-xl bg-blend-darken font-bold border rounded-4xl'>Worksout</button></li>
                    <li><button className='text-xl font-semibold'>Myplan</button></li>

                </ul>
            </div>
            <div className="navbar-end flex gap-6">
                <button className='text-xl font-semibold'>Plan</button>
                <button className='text-xl font-semibold'>Save</button>
            </div>
        </div>
    );
};

export default Navbar;