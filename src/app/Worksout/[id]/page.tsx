import { Iworker } from '@/app/types/worker';
import Image from 'next/image';
import React from 'react';
import logo from '@/assets/add.png';
import logo2 from '@/assets/save.png';

interface WorksoutDetailProps {
    params: Promise<{
        id: string;
    }>;
}

const getWorkers = async (): Promise<Iworker[]> => {
    try {
        const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
        const data = await res.json();
        return data;
    } catch {
        throw new Error('fail to fetch data');
    }
};


const WorksoutDetail = async ({ params }: WorksoutDetailProps) => {
    const { id } = await params;
    const workers = await getWorkers();
    const Worker = workers.find((worker) => String(worker.id) === String(id));
    if (!Worker) {
        return <div>Worker not found.</div>;
    }

    return (
        <div className="card bg-black shadow-sm">
            <div className="flex justify-between gap-5">
                <div>
                    <figure>
                        <Image className="rounded-xl overflow-hidden"
                            src={Worker.image}
                            alt="Album"
                            width={740}
                            height={740}
                        />
                    </figure>
                </div>
                <div>
                    <div className="card-body">
                        <h2 className="card-title text-amber-50 text-3xl">{Worker.name}</h2>
                        <p className="text-amber-50">{Worker.description}</p>
                        <div className="flex gap-2 mt-5">
                            {Worker.muscleGroups.map((muscle) => (
                                <span
                                    key={muscle}
                                    className="rounded-full border border-gray-700 px-3 py-1 text-black bg-[#CCFF00]"
                                >
                                    {muscle}
                                </span>
                            ))}
                        </div>

                        <div className="border rounded-xl bg-gray-800 p-5 mt-5">

                            <div className="flex justify-between gap-5 mt-5">
                                <span className="text-amber-50">EQUIPMENT</span><span className="text-amber-50">{Worker.equipment}</span>
                            </div>

                            <div className="flex justify-between gap-5 mt-5">
                                <span className="text-amber-50">DIFICULTRY</span><span className="text-amber-50">{Worker.difficulty}</span>
                            </div>

                            <div className="flex justify-between gap-5 mt-5">
                                <span className="text-amber-50">SETS</span><span className="text-amber-50">{Worker.sets}</span>
                            </div>
                            <div className="flex justify-between gap-5 mt-5">
                                <span className="text-amber-50">REPS</span><span className="text-amber-50">{Worker.reps}</span>
                            </div>
                            <div className="flex justify-between gap-5 mt-5">
                                <span className="text-amber-50">DURATION</span><span className="text-amber-50">{Worker.duration}</span>
                            </div>
                            <div className="flex justify-between gap-5 mt-5">
                                <span className="text-amber-50">CALORIES</span><span className="text-amber-50">{Worker.caloriesBurned}</span>
                            </div>
                            <div className="flex justify-between gap-5 mt-5">
                                <span className="text-amber-50">RATING</span><span className="text-amber-50">{Worker.rating}</span>
                            </div>

                        </div>
                        <div>
                            <h3 className="font-bold text-amber-50 text-lg mb-2">INSTRUCTIONS</h3>

                            <ol className="list-decimal list-inside space-y-2">
                                {Worker.instructions.map((instruction, index) => (
                                    <li key={index} className="text-amber-50">
                                        {instruction}
                                    </li>
                                ))}
                            </ol>
                        </div>

                        <div className="card-actions flex gap-10 mt-5">
                            <button className="btn p-2 bg-[#CCFF00]"> <Image className='h-5 w-5' src= {logo} alt="Add to plan" />  Add to today&apos;s plan</button>
                            <button className="btn p-2 btn-neutral"> <Image className='h-5 w-5 border bg-amber-50' src= {logo2} alt="Save"/> Save for later</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorksoutDetail;