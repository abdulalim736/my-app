import { Iworker } from '@/app/types/worker';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface WorkerCardProps {
    Worker: Iworker;
}

const WorkerCard = ({ Worker }: WorkerCardProps) => {
    return (
        <div className="group overflow-hidden rounded-2xl border border-gray-800 bg-[#111111] text-white shadow-lg transition duration-300 hover:-translate-y-2 hover:border-lime-400 px-5 py-5">

            <div className="relative overflow-hidden">
                <Image
                    src={Worker.image}
                    alt=""
                    width={740}
                    height={740}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
            </div>

            <div className="mb-5 flex flex-wrap gap-2 mt-5">
                {Worker.muscleGroups.map((muscle) => (
                    <span
                        key={muscle}
                        className="rounded-full border border-gray-700 px-3 py-1 text-black bg-[#CCFF00]"
                    >
                        {muscle}
                    </span>
                ))}
            </div>

            <div>

                <h2 className="mb-2 text-xl font-bold">
                    {Worker.name}
                </h2>
            </div>

            <div className="py-4">
                <p className="mt-1 text-sm font-medium text-gray-300">
                    {Worker.equipment}
                </p>
            </div>

            <div className="flex items-center justify-items-start gap-3 border-y border-gray-800 py-4">
                <div>
                    <p className="mt-1 font-semibold">⏱ {Worker.duration} min</p>
                </div>
                <div>
                    <p className="mt-1 font-semibold">🔥 {Worker.caloriesBurned} kcal</p>
                </div >
                <p className="mt-1 font-semibold">⭐ {Worker.rating}</p>
            </div>

            <div>
                <Link href={`/Worksout/${Worker.id}`}>
                
                <button className="w-full rounded-lg bg-lime-400 py-3 font-bold text-black transition hover:bg-lime-300">
                    View Workout →
                </button>

                </Link>
            </div>

        </div>
    );
};

export default WorkerCard;