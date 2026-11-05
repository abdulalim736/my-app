
"use client";

import { Iworker } from "@/app/types/worker";
import React, { createContext, useRef, useState } from "react";
import toast from "react-hot-toast";

interface WorkoutContextType {
    todaysPlans: Iworker[];
    setTodaysPlans: React.Dispatch<React.SetStateAction<Iworker[]>>;
    savedPlans: Iworker[];
    setSavedPlans: React.Dispatch<React.SetStateAction<Iworker[]>>;
    MarkAsDone: (id: number) => void;
    removeFromTodaysPlan: (id: number) => void;
    removeFromsavedPlans: (id: number) => void;
}

export const WorkoutContext = createContext<WorkoutContextType>({
    todaysPlans: [],
    setTodaysPlans: () => { },
    savedPlans: [],
    setSavedPlans: () => { },
    MarkAsDone: () => { },
    removeFromTodaysPlan: () => { },
    removeFromsavedPlans: () => { },
});

const WorkoutProvider = ({ children }: { children: React.ReactNode }) => {
    const [todaysPlans, setTodaysPlans] = useState<Iworker[]>([]);
    const [savedPlans, setSavedPlans] = useState<Iworker[]>([]);

    // Prevents repeated clicks before React re-renders.
    const completedIds = useRef<Set<number>>(new Set());

    // Remove workout from today's plan
    const removeFromTodaysPlan = (id: number) => {
        const workout = todaysPlans.find((item) => item.id === id);

        if (!workout) return;

        setTodaysPlans((prev) =>
            prev.filter((item) => item.id !== id)
        );

        toast.success(`${workout.name} removed from today's plan`);
    };

    // Mark workout as done only once
    const MarkAsDone = (id: number) => {
        const workout = todaysPlans.find((item) => item.id === id);

        if (!workout) return;

        // Stop if this workout is already completed
        if (workout.isDone || completedIds.current.has(id)) {
            return;
        }

        // Remember this workout immediately
        completedIds.current.add(id);

        setTodaysPlans((prev) =>
            prev.map((item) =>
                item.id === id
                    ? { ...item, isDone: true }
                    : item
            )
        );

        toast.success("Workout done! Great job! 🎉");
    };

    // Remove workout from saved plans
    const removeFromsavedPlans = (id: number) => {
        const workout = savedPlans.find((item) => item.id === id);

        if (!workout) return;

        setSavedPlans((prev) =>
            prev.filter((item) => item.id !== id)
        );

        toast.success(`${workout.name} removed from saved plans`);
    };

    const sharedData: WorkoutContextType = {
        todaysPlans,
        setTodaysPlans,
        savedPlans,
        setSavedPlans,
        MarkAsDone,
        removeFromTodaysPlan,
        removeFromsavedPlans,
    };

    return (
        <WorkoutContext.Provider value={sharedData}>
            {children}
        </WorkoutContext.Provider>
    );
};

export default WorkoutProvider;
