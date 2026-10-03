"use client";   

import React, { createContext, useState } from 'react'

const WorkoutContext = createContext({});


const WorkoutProvider = ({children}: {children: React.ReactNode}) => {

    const  [Workouts, setWorkouts] = useState([]);

    const  [MyPlan, setMyPlan] = useState([]);

    const sharedState = {
        Workouts,
        setWorkouts,
        MyPlan,
        setMyPlan
    };  


    

    return <WorkoutContext.Provider value={sharedState}>{children}</WorkoutContext.Provider>;    
};

export default WorkoutProvider;