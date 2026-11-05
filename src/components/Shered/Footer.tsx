
import logo from '@/assets/logo.png';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="container mx-auto max-w-7xl border-t border-zinc-800 bg-[#111111] px-4 py-8 text-white sm:px-6 sm:py-10 lg:px-10">

            <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:gap-4">

                {/* Logo Section */}
                <div className="flex items-center justify-center gap-2">

                    <Image
                        src={logo}
                        width={28}
                        height={28}
                        alt="FitLog Logo"
                        className="object-contain"
                    />

                    <span className="text-xl font-extrabold tracking-wider">
                        FITLOG
                    </span>

                </div>

                {/* Copyright Section */}
                <div>
                    <p className="text-xs leading-6 text-zinc-400 sm:text-sm">
                        © 2026 <span className="font-semibold text-white">FitLog</span> - Workout Library.
                        <span className="block sm:inline sm:ml-1">
                            Train hard, log honest.
                        </span>
                    </p>
                </div>

            </div>

        </footer>
    );
};

export default Footer;
