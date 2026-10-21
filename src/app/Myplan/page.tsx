
"use client";

import { WorkoutContext } from "@/contex/WorkoutContex";
import { useContext } from "react";




const MyPlan = () => {

const workoutProvider = useContext(WorkoutContext);

    return (
        <div className="container mx-auto px-12 py-6">

           <div>
             <h1 className="text-2xl font-bold">My Plan</h1>
            <p>Cap of five lifts for today. finish them and load more </p>

           </div>

           
        </div>
    );  
};

export default MyPlan;