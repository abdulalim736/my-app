
import WorkerCard from '@/components/homepage/WorkerCard';
import { Iworker } from '@/app/types/worker';
import { getWorkers } from '@/lib/apps';



const Library = async () => {
  const workers: Iworker[] = await getWorkers();

  return (
    <div className='container max-w-7xl bg-[#111111] mx-auto px-12 py-6'>
      <div className='mb-10'>
        <h1 className='text-3xl text-amber-50 font-bold'> THE LIBRARY </h1>
        <p className='text-gray-50'> Twelve lifts covering every major muscle group</p>
      </div>
      <div className='grid gap-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
        {workers.map((worker) => {
          return (

            <WorkerCard key={worker.id} Worker={worker} />)

        }
        )}
      </div>
    </div>
  );
};

export default Library;