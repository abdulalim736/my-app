import { Iworker } from '@/app/types/worker';
import Image from 'next/image';
import React from 'react';

interface WorkerCardProps {
    Worker: Iworker;
}

const WorkerCard = ({ Worker }: WorkerCardProps) => {
    return (
        <div className="group overflow-hidden rounded-2xl border border-gray-800 bg-[#111111] text-white shadow-lg transition duration-300 hover:-translate-y-2 hover:border-lime-400">

            {/* Image */}
            <div className="relative w-56 h-56 overflow-hidden">
                <Image
                    src={Worker.image}
                    alt={Worker.name}
                    width={800}
                    height={600}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Difficulty */}
                <span className="absolute left-4 top-4 rounded-full bg-lime-400 px-3 py-1 text-xs font-bold text-black">
                    {Worker.difficulty}
                </span>

                {/* Rating */}
                <div className="absolute right-4 top-4 rounded-full bg-black/70 px-3 py-1 text-sm">
                    ⭐ {Worker.rating}
                </div>
            </div>

            {/* Content */}
            <div className="p-5">

                {/* Title */}
                <h2 className="mb-2 text-xl font-bold">
                    {Worker.name}
                </h2>

                {/* Description */}
                <p className="mb-4 line-clamp-2 text-sm leading-6 text-gray-400">
                    {Worker.description}
                </p>

                {/* Muscle Groups */}
                <div className="mb-5 flex flex-wrap gap-2">
                    {Worker.muscleGroups.map((muscle) => (
                        <span
                            key={muscle}
                            className="rounded-full border border-gray-700 px-3 py-1 text-xs text-gray-300"
                        >
                            {muscle}
                        </span>
                    ))}
                </div>

                {/* Worker Info */}
                <div className="grid grid-cols-2 gap-3 border-y border-gray-800 py-4">

                    <div>
                        <p className="text-xs text-gray-500">Duration</p>
                        <p className="mt-1 font-semibold">
                            ⏱ {Worker.duration} min
                        </p>
                    </div>

                    <div>
                        <p className="text-xs text-gray-500">Calories</p>
                        <p className="mt-1 font-semibold">
                            🔥 {Worker.caloriesBurned} kcal
                        </p>
                    </div>

                    <div>
                        <p className="text-xs text-gray-500">Sets</p>
                        <p className="mt-1 font-semibold">
                            {Worker.sets} sets
                        </p>
                    </div>

                    <div>
                        <p className="text-xs text-gray-500">Reps</p>
                        <p className="mt-1 font-semibold">
                            {Worker.reps}
                        </p>
                    </div>
                </div>

                {/* Equipment */}
                <div className="py-4">
                    <p className="text-xs text-gray-500">Equipment</p>
                    <p className="mt-1 text-sm font-medium text-gray-300">
                        {Worker.equipment}
                    </p>
                </div>

                {/* Button */}
                <button className="w-full rounded-lg bg-lime-400 py-3 font-bold text-black transition hover:bg-lime-300">
                    View Worker →
                </button>
            </div>
        </div>
    );
};



export default WorkerCard;