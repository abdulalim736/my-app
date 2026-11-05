
"use client";

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
}

const MyplanPage = () => {
    const {
        todaysPlans,
        savedPlans,
        MarkAsDone,
        removeFromTodaysPlan,
        removeFromsavedPlans
    } = useContext(WorkoutContext);

    const [sortby, setSortby] = useState<
        "Duration" | "CaloriesBurned" | "Rating"
    >("Duration");

    // Calculate workout metrics
    const metrics: metrics = {
        exercises: todaysPlans.length,
        minutes: todaysPlans.reduce(
            (total, item) => total + item.duration, 0
        ),
        calories: todaysPlans.reduce(
            (total, item) => total + item.caloriesBurned, 0
        )
    };

    // Sort workout plans
    const sortedTodaysPlan = (Worker: Iworker[]) => {
        const sortedPlan = [...Worker];

        if (sortby === "Duration") {
            sortedPlan.sort((a, b) => b.duration - a.duration);
        } else if (sortby === "CaloriesBurned") {
            sortedPlan.sort(
                (a, b) => b.caloriesBurned - a.caloriesBurned
            );
        } else if (sortby === "Rating") {
            sortedPlan.sort((a, b) => b.rating - a.rating);
        }

        return sortedPlan;
    };

    const sortedtodaysPlans = sortedTodaysPlan(todaysPlans);
    const sortedsavedPlans = sortedTodaysPlan(savedPlans);

    return (
        <div className="
            container max-w-7xl mx-auto
            px-4 sm:px-6 md:px-8 lg:px-12
            py-6 sm:py-8
            bg-[#111111]
            min-h-screen
        ">

            {/* Page Heading */}
            <div className="space-y-2 mb-6 sm:mb-8">

                <h2 className="
                    text-2xl sm:text-3xl md:text-4xl
                    font-bold
                    text-amber-50
                ">
                    MY PLAN
                </h2>

                <p className="
                    text-sm sm:text-base
                    text-amber-50
                    leading-relaxed
                ">
                    Cap of five lifts for today. Finish them, then load more.
                </p>

            </div>


            {/* Workout Metrics */}
            <div className="
                grid grid-cols-1
                sm:grid-cols-3
                gap-3 sm:gap-4
                rounded-2xl
                border border-gray-800
                bg-[#111111]
                p-4 sm:p-5
                my-6
            ">

                <div className="text-center sm:text-left space-y-1">
                    <p className="text-sm text-gray-400">
                        Exercises
                    </p>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#C2F800]">
                        {metrics.exercises}
                    </h3>
                </div>

                <div className="text-center sm:text-left space-y-1">
                    <p className="text-sm text-gray-400">
                        Minutes
                    </p>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#C2F800]">
                        {metrics.minutes}
                    </h3>
                </div>

                <div className="text-center sm:text-left space-y-1">
                    <p className="text-sm text-gray-400">
                        Calories
                    </p>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#C2F800]">
                        {metrics.calories}
                    </h3>
                </div>

            </div>


            {/* Sort Dropdown */}
            <div className="
                flex justify-end
                w-full
                mb-5
            ">

                <select
                    value={sortby}
                    onChange={(e) =>
                        setSortby(
                            e.target.value as
                            "Duration" | "CaloriesBurned" | "Rating"
                        )
                    }
                    className="
                        select select-neutral
                        select-sm sm:select-md
                        w-full sm:w-52
                        bg-[#111111]
                        text-amber-50
                        border border-gray-700
                        focus:outline-none
                    "
                >

                    <option disabled value="">
                        Sort By
                    </option>

                    <option value="Duration">
                        Duration
                    </option>

                    <option value="CaloriesBurned">
                        Calories Burned
                    </option>

                    <option value="Rating">
                        Rating
                    </option>

                </select>

            </div>


            {/* Workout Tabs */}
            <div className="tabs tabs-lift w-full">

                {/* Today's Plan Tab */}
                <input
                    type="radio"
                    name="my_tabs_3"
                    className="
                        tab
                        bg-[#111111]
                        border-gray-800
                        text-white
                        text-xs sm:text-sm
                        flex-1 sm:flex-none
                    "
                    aria-label="Today's Plan"
                    defaultChecked
                />

                <div className="
                    tab-content
                    bg-[#111111]
                    text-amber-50
                    border-gray-800
                    p-3 sm:p-4 md:p-6
                    space-y-4 sm:space-y-5
                    w-full
                ">

                    {
                        sortedtodaysPlans.length > 0
                            ? sortedtodaysPlans.map((Worker) => (
                                <TodaysPlanCard
                                    key={Worker.id}
                                    Worker={Worker}
                                    MarkAsDone={MarkAsDone}
                                    removeFromTodaysPlan={removeFromTodaysPlan}
                                />
                            ))
                            : <EmptyPlanCard />
                    }

                </div>


                {/* Saved Plans Tab */}
                <input
                    type="radio"
                    name="my_tabs_3"
                    className="
                        tab
                        bg-[#111111]
                        border-gray-800
                        text-white
                        text-xs sm:text-sm
                        flex-1 sm:flex-none
                    "
                    aria-label="Saved"
                />

                <div className="
                    tab-content
                    bg-[#111111]
                    text-amber-50
                    border-gray-800
                    p-3 sm:p-4 md:p-6
                    space-y-4 sm:space-y-5
                    w-full
                ">

                    {
                        sortedsavedPlans.length > 0
                            ? sortedsavedPlans.map((Worker) => (
                                <SavedPlanCard
                                    key={Worker.id}
                                    Worker={Worker}
                                    removeFromsavedPlans={removeFromsavedPlans}
                                />
                            ))
                            : <EmptyPlanCard />
                    }

                </div>

            </div>

        </div>
    );
};

export default MyplanPage;
