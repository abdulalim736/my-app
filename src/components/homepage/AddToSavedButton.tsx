'use client'
import { Iworker } from '@/app/types/worker';
import { WorkoutContext } from '@/contex/WorkoutContex';
import { Dispatch, SetStateAction, useContext } from 'react';
import savelogo from "@/assets/save.png"
import Image from 'next/image';
import toast from 'react-hot-toast';




const AddToSaveButton = ({ ...Worker }: Iworker) => {

    const { savedPlans, setSavedPlans } = useContext(WorkoutContext) as unknown as {
        savedPlans: Iworker[];
        setSavedPlans: Dispatch<SetStateAction<Iworker[]>>;
    };

    const handletoSaveForLater = () => {

        if( savedPlans.some((item)=> item.id===Worker.id)){
            toast.error("Allready saved")
            return;
        }
        
        setSavedPlans([...savedPlans, Worker]);
        toast.success( `"${Worker.name}"  save for later`);
    }

    return (


        <button className='btn btn-active btn-warning flex gap-3 '
         onClick={() => handletoSaveForLater()}>
            <>
                <Image src={savelogo} alt="Add" className="w-5 h-5" />
                <span>Save for later</span>
            </>
        </button>
    );
};

export default AddToSaveButton;