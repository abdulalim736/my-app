"use client";

import React, { useContext } from 'react';
import Image from 'next/image';
import logo from '@/assets/add.png';
import { Iworker } from '@/app/types/worker';
import { WorkoutContext } from '@/contex/WorkoutContex';
import toast from 'react-hot-toast';






const AddButton = ({ Worker }: { Worker: Iworker }) => {

    const { Plan, setPlan } = useContext(WorkoutContext) as {
        Plan: Iworker[];
        setPlan: React.Dispatch<React.SetStateAction<Iworker[]>>;
    };
    

    const handleAddToMyPlan = () => {

        setPlan([...Plan , Worker]);
        toast.success(`${Worker.name} has been added to your plan!`);
    };

    return (
        <div>
         <button className="btn p-2 bg-[#CCFF00]" onClick={() => handleAddToMyPlan()}>
             <Image className='h-5 w-5' src={logo} alt="Add to plan" />
             Add to today&apos;s plan
         </button>
        </div>
    );
};

export default AddButton;