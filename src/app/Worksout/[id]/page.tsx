


import Image from 'next/image';
import AddToPlanButton from '@/components/homepage/AddToPlanButton';
import { getWorkers } from '@/lib/apps';
import AddToSavedButton from '@/components/homepage/AddToSavedButton';



interface WorksoutDetailProps {
    params: Promise<{
        id: string;
    }>;
}

const WorksoutDetail = async ({ params }: WorksoutDetailProps) => {
    const { id } = await params;
    const workers = await getWorkers(); 
    const Worker = workers.find((worker) => String(worker.id) === String(id));
    if (!Worker) {
        return <div>Worker not found.</div>;
    }

    return (
        <div className="card bg-black shadow-sm container max-w-7xl mx-auto px-12 py-6 min-h-screen items-center">
            <div className=" grid grid-cols-1 md:grid-cols-2 md: gap-2 items-center">
                <div className=" relative aspect-4/3 w-full">
                    <figure>
                        <Image className="rounded-xl overflow-hidden object-cover"
                            src={Worker.image}
                            alt="Album"
                            width={600}
                            height={600}
                        />
                    </figure>
                </div>
                <div>
                    <div className="card-body">
                        <h2 className="card-title text-amber-50 text-3xl">{Worker.name.toUpperCase()}</h2>
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

                    </div>
                    <div className='flex flex-col gap-3 mt-5 sm:flex-row'>
                        <AddToPlanButton {...Worker} />
                        <AddToSavedButton {...Worker}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorksoutDetail;