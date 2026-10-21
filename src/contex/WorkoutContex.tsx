"use client";   

import { Iworker } from '@/app/types/worker';
import React, { createContext, useState } from 'react'



interface WorkoutContextType {
    Plan: Iworker[];
    setPlan: React.Dispatch<React.SetStateAction<Iworker[]>>;
    saved: Iworker[];
    setsaved: React.Dispatch<React.SetStateAction<Iworker[]>>;

}

export const WorkoutContext = createContext<WorkoutContextType>({
   
    Plan: [],
    setPlan: () => {},
    saved: [],
    setsaved: () => {}
});

const WorkoutProvider = ({children}: {children: React.ReactNode}) => {


    const [Plan, setPlan] = useState<Iworker[]>([]);

    const [saved, setsaved] = useState<Iworker[]>([]);

    const sharedState: WorkoutContextType = {
       
        
        Plan,
        setPlan,
        saved,
        setsaved
        
    };


    

    return <WorkoutContext.Provider value={sharedState}>{children}</WorkoutContext.Provider>;    
};

export default WorkoutProvider;