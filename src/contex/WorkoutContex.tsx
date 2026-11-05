
"use client";

import { Iworker } from "@/app/types/worker";
import React, {
  createContext,
  useEffect,
  useRef,
  useState,
} from "react";
import toast from "react-hot-toast";

interface WorkoutContextType {
  todaysPlans: Iworker[];
  setTodaysPlans: React.Dispatch<React.SetStateAction<Iworker[]>>;
  savedPlans: Iworker[];
  setSavedPlans: React.Dispatch<React.SetStateAction<Iworker[]>>;
  MarkAsDone: (id: number) => void;
  removeFromTodaysPlan: (id: number) => void;
  removeFromsavedPlans: (id: number) => void;
}

export const WorkoutContext = createContext<WorkoutContextType>({
  todaysPlans: [],
  setTodaysPlans: () => {},
  savedPlans: [],
  setSavedPlans: () => {},
  MarkAsDone: () => {},
  removeFromTodaysPlan: () => {},
  removeFromsavedPlans: () => {},
});

const WorkoutProvider = ({ children }: { children: React.ReactNode }) => {
  const [todaysPlans, setTodaysPlans] = useState<Iworker[]>([]);
  const [savedPlans, setSavedPlans] = useState<Iworker[]>([]);

  const [isLoaded, setIsLoaded] = useState(false);

  const completedIds = useRef<Set<number>>(new Set());

  // Load data from localStorage when the app starts
  useEffect(() => {
    let isActive = true;
    const timeoutId = window.setTimeout(() => {
    try {
      const storedTodaysPlans = localStorage.getItem("todaysPlans");
      const storedSavedPlans = localStorage.getItem("savedPlans");

      const parsedTodaysPlans: Iworker[] = storedTodaysPlans
        ? JSON.parse(storedTodaysPlans)
        : [];

      const parsedSavedPlans: Iworker[] = storedSavedPlans
        ? JSON.parse(storedSavedPlans)
        : [];

      if (!isActive) return;

      setTodaysPlans(parsedTodaysPlans);
      setSavedPlans(parsedSavedPlans);

      completedIds.current = new Set(
        parsedTodaysPlans
          .filter((item) => item.isDone)
          .map((item) => item.id)
      );
    } catch (error) {
      console.error("Failed to load workout data:", error);
      toast.error("Could not load saved workouts");
    } finally {
      if (isActive) setIsLoaded(true);
    }
    }, 0);

    return () => {
      isActive = false;
      window.clearTimeout(timeoutId);
    };
  }, []);

  // Save data whenever plans change
  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem("todaysPlans", JSON.stringify(todaysPlans));
    localStorage.setItem("savedPlans", JSON.stringify(savedPlans));
  }, [todaysPlans, savedPlans, isLoaded]);

  // Remove workout from today's plan
  const removeFromTodaysPlan = (id: number) => {
    const workout = todaysPlans.find((item) => item.id === id);

    if (!workout) return;

    setTodaysPlans((prev) =>
      prev.filter((item) => item.id !== id)
    );

    completedIds.current.delete(id);

    toast.success(`${workout.name} removed from today's plan`);
  };

  // Mark workout as done only once
  const MarkAsDone = (id: number) => {
    const workout = todaysPlans.find((item) => item.id === id);

    if (!workout || workout.isDone || completedIds.current.has(id)) {
      return;
    }

    completedIds.current.add(id);

    setTodaysPlans((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isDone: true } : item
      )
    );

    toast.success("Workout done! Great job! 🎉");
  };

  // Remove workout from saved plans
  const removeFromsavedPlans = (id: number) => {
    const workout = savedPlans.find((item) => item.id === id);

    if (!workout) return;

    setSavedPlans((prev) =>
      prev.filter((item) => item.id !== id)
    );

    toast.success(`${workout.name} removed from saved plans`);
  };

  const sharedData: WorkoutContextType = {
    todaysPlans,
    setTodaysPlans,
    savedPlans,
    setSavedPlans,
    MarkAsDone,
    removeFromTodaysPlan,
    removeFromsavedPlans,
  };

  return (
    <WorkoutContext.Provider value={sharedData}>
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutProvider;
