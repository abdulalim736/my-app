"use client";

import { Iworker } from "@/app/types/worker";
import Image from "next/image";
import Link from "next/link";
import remove from "@/assets/remove.png"

interface SavedPlanCardProps{
    Worker: Iworker;
    removeFromsavedPlans:(id:number)=> void;
}

const SavedPlanCard = ({Worker, removeFromsavedPlans}:SavedPlanCardProps) => {
    return (
        <div className=" flex justify-between rounded-2xl border border-gray-800 bg-[#111111] text-amber-50 shadow-lg hover:border-lime-400 px-5 py-5">

            <div className="flex gap-5 space-y-5">
                <div className="relative overflow-hidden">
                    <Image
                        src={Worker.image}
                        alt=""
                        width={740}
                        height={740}
                        className="h-25 w-25 rounded-2xl"
                    />
                </div>

                <div className="border-y border-gray-800 py-4">

                    <h2>
                        {Worker.name.toUpperCase()}
                    </h2>

                    <p className="mt-1 text-sm font-medium text-gray-300">
                        {Worker.equipment}
                    </p>

                    <div className="flex gap-2">
                        <div>
                            <p className="mt-1 font-semibold">⏱ {Worker.duration} min</p>
                        </div>
                        <div>
                            <p className="mt-1 font-semibold">🔥 {Worker.caloriesBurned} kcal</p>
                        </div >
                        <div>
                            <p className="mt-1 font-semibold">⭐ {Worker.rating}</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="flex items-center gap-3">
                <Link href={`/Worksout/${Worker.id}`}>
                    <button className="btn btn-active bg-[#111111] text-amber-50">
                        View Workout
                    </button>
                </Link>
                <button className="rounded-2xl" onClick={() => removeFromsavedPlans(Worker.id)}>
                    <Image className="bg-base-300" src={remove} height={30} width={30} alt="Removebutton" />
                </button>

            </div>

        </div>
    );
};

export default SavedPlanCard;