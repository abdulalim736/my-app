import Image from 'next/image';
import logo from '@/assets/logo.png';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className="navbar bg-[#111111] shadow-sm flex justify-between items-center container mx-auto px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <Link href="/Worksout"> </Link>

                        <Link href="/Myplan"> </Link>
                    </ul>
                </div>
                <div className='flex gap-2'>
                    <Image className='h-5 w-5' src={logo} alt="logo" />
                    <p className='text-2xl text-white font-bold'>FITLOG</p>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                    <Link href="/">
                        <li><button className='text-[rgb(187,241,10)] text-xl bg-blend-darken font-bold border rounded-4xl'>Worksout</button></li>
                    </Link>
                    <Link href="/Myplan">
                        <li><button className='text-xl text-amber-50 font-semibold'>Myplan</button></li>
                    </Link>

                </ul>
            </div>
            <div className="navbar-end flex gap-6">
                <button className="btn">
                    Plan <div className="badge badge-sm badge-accent">0</div>
                </button>

                <button className="btn">
                    Saved <div className="badge badge-sm badge-outline">0</div>
                </button>
            </div>
        </div>
    );
};

export default Navbar;