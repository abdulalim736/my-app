import React from 'react';

interface WorkDetailsProps {
  params: Promise<{ id: string }>;
}

interface Iworker {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: string;
  rating: number;
  description: string;
  instructions: string[];
}

const getWorkers = async (): Promise<Iworker[]> => {
  try {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = await res.json();
    return data as Iworker[];
  } catch {
    throw new Error('fail to fetch data');
  }
};

const WorkDetails = async ({ params }: WorkDetailsProps) => {
  const { id } = await params;
  const workers: Iworker[] = await getWorkers();
  const worker = workers.find((item: Iworker) => String(item.id) === String(id));

  return (
    <div>
      {worker ? (
        <>
          <h1>{worker.name}</h1>
          <p>{worker.description}</p>
        </>
      ) : (
        <p>Workout not found</p>
      )}
    </div>
  );
};

export default WorkDetails;