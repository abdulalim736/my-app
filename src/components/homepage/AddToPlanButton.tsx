"use client"
import { Iworker } from "@/app/types/worker";
import Addlogo from "@/assets/add.png"
import { WorkoutContext } from "@/contex/WorkoutContex";
import Image from 'next/image';
import { useContext, type Dispatch, type SetStateAction } from "react";
import toast from "react-hot-toast";



const AddToPlanButton = ({ ...Worker }: Iworker) => {

    const { todaysPlans, setTodaysPlans } = useContext(WorkoutContext) as unknown as {
        todaysPlans: Iworker[];
        setTodaysPlans: Dispatch<SetStateAction<Iworker[]>>;
    };

    const handleAddtoPlan = () => {
        if (todaysPlans.length>=5){
            toast.error("Todays plan is full (Max 5) ");
            return;
        }

        if (todaysPlans.some((item)=> item.id===Worker.id)){
            toast.error("Allready in todays plan!")
            return;
        }

        setTodaysPlans([...todaysPlans, Worker]);
        toast.success( `You have successfuly add "${Worker.name}" in your plan`);
    }

    return (


        <button className='btn btn-active btn-success flex gap-2' onClick={() => handleAddtoPlan()}>
            <>
                <Image src={Addlogo} alt="Add" className="w-5 h-5" />
                <span>Add to todays Plan</span>
            </>
        </button>
    );
};

export default AddToPlanButton;