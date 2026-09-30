import React from 'react';
import WorkerCard from './WorkerCard';
import { Iworker } from '@/app/types/worker';

const getWorkers = async (): Promise<Iworker[]> => {
  try {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = await res.json();
    return data as Iworker[];
  } catch {
    throw new Error('fail to fetch data');
  }
};

const Library = async () => {
  const workers: Iworker[] = await getWorkers();

  return (
    <div className='container bg-[#111111] mx-auto px-12 py-6'>
      <div className='mb-10'>
         <h1 className='text-3xl text-amber-50 font-bold'> THE LIBRARY </h1>
        <p className='text-gray-50'> Twelve lifts covering every major muscle group</p>
      </div>
      <div className='grid grid-cols-3 gap-5'>
        {workers.map((worker) => (
          <div key={worker.id}>
            <WorkerCard Worker={worker} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;