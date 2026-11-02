"use client";

import { Iworker } from '@/app/types/worker';
import React, { createContext, useState } from 'react'
import toast from 'react-hot-toast';




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

    const removeFromTodaysPlan = (id: number) => {
        setTodaysPlans((prev) => prev.filter((item) => item.id !== id));
        toast.success(`${Worker.name} removed from today's plan`);
    };

    const MarkAsDone = (id: number) => {
        setTodaysPlans((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, isDone: true } : item
            )
        );
        toast.success("Workout done! Great job! 🎉");
    };

    const removeFromsavedPlans = (id: number) => {
        setSavedPlans((plans) => plans.filter((plan) => plan.id !== id));
        toast.success(`${Worker.name} removed from saved plans`);
    };


    const sharedData = {
        todaysPlans,
        setTodaysPlans,
        savedPlans,
        setSavedPlans,
        MarkAsDone,
        removeFromTodaysPlan,
        removeFromsavedPlans,
    };


    return <WorkoutContext.Provider value={sharedData}>{children}</WorkoutContext.Provider>;
};

export default WorkoutProvider;