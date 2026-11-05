
"use client";

import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { useContext } from "react";
import { WorkoutContext } from "@/contex/WorkoutContex";

const Navbar = () => {
    const { todaysPlans, savedPlans } = useContext(WorkoutContext);

    return (
        <header className=" max-w-7xl sticky top-0 z-50 border-b border-zinc-800 bg-[#111111]/95 backdrop-blur-md">


            <nav className="container max-w-7xl mx-auto flex min-h-20 items-center justify-between px-4 py-3 sm:px-6 lg:px-10">

                {/* Left Section: Mobile Menu + Logo */}
                <div className="flex items-center gap-3">

                    {/* Mobile Hamburger Menu */}
                    <details className="relative lg:hidden">

                        <summary
                            aria-label="Open navigation menu"
                            className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-lg border border-zinc-700 text-white hover:border-lime-400 hover:text-lime-400 [&::-webkit-details-marker]:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </summary>

                        {/* Dropdown */}
                        <ul className="absolute left-0 top-14 z-50 w-52 space-y-1 rounded-xl border border-zinc-700 bg-[#181818] p-3 shadow-2xl">

                            <li>
                                <Link
                                    href="/Worksout"
                                    className="block rounded-lg px-4 py-3 font-semibold text-lime-400 hover:bg-zinc-800"
                                >
                                    Workouts
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/Myplan"
                                    className="block rounded-lg px-4 py-3 font-semibold text-zinc-200 hover:bg-zinc-800 hover:text-lime-400"
                                >
                                    My Plans
                                </Link>
                            </li>

                        </ul>
                    </details>

                    {/* Logo */}
                    <div className=" hidden lg:flex shrink-0 items-center gap-2">
                        <Image
                            src={logo}
                            alt="FitLog Logo"
                            className="h-8 w-8 object-contain"
                        />
                        <span className="text-xl font-extrabold tracking-wider text-white sm:text-2xl">
                            FITLOG
                        </span>
                    </div>

                </div>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-8 lg:flex">
                    <Link href="/Worksout" className="font-bold text-lime-400">
                        Workouts
                    </Link>

                    <Link href="/Myplan" className="font-semibold text-zinc-300 hover:text-lime-400">
                        My Plans
                    </Link>
                </div>

                {/* Plan & Saved */}
                <div className="flex items-center gap-2 sm:gap-3">
                    <div className="flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-3 py-2">
                        <span className="text-xs font-semibold text-zinc-300">Plan</span>
                        <span className="rounded-full bg-lime-400 px-2 text-xs font-bold text-black">
                            {todaysPlans.length}
                        </span>
                    </div>

                    <div className="flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-3 py-2">
                        <span className="text-xs font-semibold text-zinc-300">Saved</span>
                        <span className="text-xs font-bold text-lime-400">
                            {savedPlans.length}
                        </span>
                    </div>
                </div>

            </nav>

        </header>
    );
};

export default Navbar;
