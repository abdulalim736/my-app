import React from 'react';
import logo from '@/assets/banner.png';
import Image from 'next/image';
const Banner = () => {
    return (
        <div className='container bg-[#111111] mx-auto px-12 py-6'>
            <div className='flex justify-between items-center my-6'>
                <div className='grid grid-cols-1 gap-4 items-start'>
                    <p className='text-[#C2F800]'>WORKOUT LIBRARY</p>
                    <h1 className='text-5xl'>TRAIN WITH INTENT. LOG<br/> EVERY SET.</h1>
                    <p>
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it<br/> into
                        today&apos;s plan, and watch the week&apos;s work add up.
                    </p>
                    <span><button className='bg-[#C2F800] px-6 py-3 font-semibold'>BROWSE WORKOUTS</button></span>
                </div>
                <div>
                    <Image src={logo} alt="FitLog banner" />
                </div>
            </div>
        </div>
    );
};

export default Banner;