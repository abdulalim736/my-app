import { Iworker } from "@/app/types/worker";

export const getWorkers = async (): Promise<Iworker[]> => {
  try {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = await res.json();
    return data as Iworker[];
  } catch {
    throw new Error('fail to fetch data');
  }
};