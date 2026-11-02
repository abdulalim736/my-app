
"use client"

import EmptyPlanCard from '@/components/myPlanDetails/EmptyPlanCard';
import SavedPlanCard from '@/components/myPlanDetails/SavedPlanCard';
import TodaysPlanCard from '@/components/myPlanDetails/TodaysPlanCard';
import { WorkoutContext } from '@/contex/WorkoutContex';
import { useContext, useState } from 'react';
import { Iworker } from '../types/worker';


interface metrics {
    exercises: number;
    minutes: number;
    calories: number;
};

const MyplanPage = () => {
    const { todaysPlans, savedPlans, MarkAsDone, removeFromTodaysPlan, removeFromsavedPlans } = useContext(WorkoutContext);
    const [sortby, setSortby] = useState<"Duration" | "CaloriesBurned" | "Rating">("Duration");

    const metrics: metrics = {
        exercises: todaysPlans.length,
        minutes: todaysPlans.reduce((total, item) => total + item.duration, 0),
        calories: todaysPlans.reduce((total, item) => total + item.caloriesBurned, 0)
    };

    const sortedTodaysPlan = (Worker: Iworker[]) => {
        const sortedPlan = [...Worker];

        if (sortby === "Duration") {
            sortedPlan.sort((a, b) => b.duration - a.duration);
        } else if (sortby === "CaloriesBurned") {
            sortedPlan.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
        } else if (sortby === "Rating") {
            sortedPlan.sort((a, b) => b.rating - a.rating);
        };

        return sortedPlan;

    }

    const sortedtodaysPlans = sortedTodaysPlan(todaysPlans);
    const sortedsavedPlans = sortedTodaysPlan(savedPlans);

    return (
        <div className='container mx-auto px-12 py-6 bg-[#111111]'>
            <div className='container mx-auto px-12 py-6 bg-[#111111]'>

                <div className="bg-[#111111]">
                    <h2 className='text-4xl text-amber-50'>MY PLAN</h2>
                    <p className="text-amber-50">Cap of five lift for today. Finish them, then load more.</p>
                </div>

                <div className="container rounded-2xl border-0 bg-[#111111] border-gray-800 p-4 my-4 space-y-2 flex justify-between items-center">

                    <span className="text-amber-50">Exercises: {metrics.exercises}</span>
                    <span className="text-amber-50" >Minutes: {metrics.minutes}</span>
                    <span className="text-amber-50">Calories: {metrics.calories}</span>

                </div>



                <div className = "flex justify-between items-start">

                    <div className="tabs tabs-lift">
                        <input type="radio" name="my_tabs_3" className="tab bg-[#111111] border-black text-amber-50" aria-label="Todays Plan" />
                        <div className="tab-content bg-[#111111] text-amber-50 border-black p-6 space-y-5">
                            {
                                sortedtodaysPlans.length > 0 ? sortedtodaysPlans.map((Worker) => {
                                    return <TodaysPlanCard key={Worker.id} Worker={Worker} MarkAsDone={MarkAsDone} removeFromTodaysPlan={removeFromTodaysPlan} />
                                }) :
                                    <EmptyPlanCard />

                            }
                        </div>

                        <input type="radio" name="my_tabs_3" className="tab bg-[#111111] border-black text-amber-50" aria-label="Saved" />
                        <div className="tab-content bg-[#111111] text-amber-50 border-black p-6 space-y-5">
                            {
                                sortedsavedPlans.length > 0 ? sortedsavedPlans.map((Worker) => {
                                    return <SavedPlanCard key={Worker.id} Worker={Worker} removeFromsavedPlans={removeFromsavedPlans} />
                                }) : <EmptyPlanCard />
                            }
                        </div>
                    </div>


                    <div>
                        <select
                            value={sortby} onChange={(e) => setSortby(e.target.value as "Duration" | "CaloriesBurned" | "Rating")}

                            defaultValue="Sort By" className="select select-neutral bg-[#111111] text-amber-50 border-black">
                            <option disabled={true}>Sort By</option>
                            <option value={"Duration"}>Duration</option>
                            <option value={"CaloriesBurned"}>CaloriesBurned</option>
                            <option value={"Rating"}>Rating</option>
                        </select>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default MyplanPage;