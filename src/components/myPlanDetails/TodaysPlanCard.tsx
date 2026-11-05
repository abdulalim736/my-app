"use client";

import { Iworker } from "@/app/types/worker";
import Image from "next/image";
import Link from "next/link";
import remove from "@/assets/remove.png";
import check from "@/assets/check.png";


interface TodaysPlanCardProps {
    Worker: Iworker;
    MarkAsDone:(id:number)=> void;
    removeFromTodaysPlan:(id:number)=> void;
};

const TodaysPlanCard = ({ Worker, MarkAsDone, removeFromTodaysPlan}: TodaysPlanCardProps) => {
            
    return (
        <div className=" container max-w-7xl
         flex flex-col lg:flex-row justify-between
          items-start lg:items-center rounded-2xl
           border border-gray-800 bg-[#111111]
            text-amber-50 px-5 py-5">

            <div className="flex gap-5 space-y-5 items-center">
                <div className="relative overflow-hidden shrink-0">
                    <Image
                        src={Worker.image}
                        alt=""
                        width={740}
                        height={740}
                        className="h-20 w-20
                            sm:h-24 sm:w-24
                            md:h-28 md:w-28
                            object-cover
                            rounded-2xl"
                    />
                </div>

                <div className="border-y border-gray-800 py-4">

                    <h2>
                        {Worker.name.toUpperCase()}
                    </h2>

                    <p className="mt-1 text-sm font-medium text-gray-300">
                        {Worker.equipment}
                    </p>

                    <div className="flex gap-1">
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

            <div className="flex flex-wrap
                items-center
                gap-2 sm:gap-3
                w-full lg:w-auto">
                <Link href={`/Worksout/${Worker.id}`}>
                    <button className="p-2 rounded-2xl border-2 bg-[#111111] text-amber-50">
                        View Workout
                    </button>
                </Link>

                <button className="flex gap-2 rounded-2xl bg-[#C2F800] p-2 text-black" onClick={() => MarkAsDone(Worker.id)}>
                    <Image className="shrink-0" src={check} height={30} width={30} alt="checkmark" />
                    Mark as Done
                </button>

                <button className="rounded-2xl p-2" onClick={() => removeFromTodaysPlan(Worker.id)}>
                    <Image className="bg-base-300 shrink-0" src={remove} height={30} width={30} alt="Removebutton" />
                </button>

            </div>

        </div>
    );
};

export default TodaysPlanCard;