
import React from 'react';
import logo from '@/assets/banner.png';
import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
    return (
        <section className="container max-w-7xl mx-auto bg-[#111111] px-4 py-10 sm:px-6 sm:py-14 lg:px-10 lg:py-16">

            <div className="flex flex-col-reverse items-center justify-between gap-10 md:flex-row md:gap-6 lg:gap-12">

                {/* Left Content */}
                <div className="flex w-full flex-col items-center gap-5 text-center md:w-3/5 md:items-start md:text-left">

                    <p className="text-xs font-bold tracking-[0.3em] text-[#C2F800] sm:text-sm">
                        WORKOUT LIBRARY
                    </p>

                    <h1 className="text-3xl font-extrabold leading-tight text-amber-50 sm:text-4xl lg:text-5xl xl:text-6xl">
                        TRAIN WITH INTENT.
                        <span className="block text-[#C2F800]">
                            LOG EVERY SET.
                        </span>
                    </h1>

                    <p className="max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
                        FitLog is a dark, no-nonsense gym companion: pick a lift,
                        lock it into today&apos;s plan, and watch the week&apos;s work add up.
                    </p>

                    {/* CTA Button */}
                    <Link
                        href="/Worksout"
                        className="mt-2 inline-flex items-center gap-2 rounded-xl bg-[#C2F800] px-6 py-3.5 text-sm font-extrabold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-lime-300 hover:shadow-lg hover:shadow-lime-400/20"
                    >
                        BROWSE WORKOUTS
                        <span>→</span>
                    </Link>

                </div>

                {/* Right Image */}
                <div className="flex w-full justify-center md:w-2/5">

                    <div className="relative w-52 sm:w-64 md:w-full md:max-w-sm lg:max-w-md">

                        <div className="absolute inset-0 rounded-full bg-[#C2F800]/10 blur-3xl"></div>

                        <Image
                            src={logo}
                            alt="FitLog workout banner"
                            priority
                            className="relative h-auto w-full object-contain drop-shadow-2xl"
                            sizes="(max-width: 640px) 208px, (max-width: 768px) 256px, 40vw"
                        />

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Banner;
