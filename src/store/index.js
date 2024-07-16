import { atom, useAtom } from "jotai";
import { useEffect, useRef } from "react";

// implement the timer atoms here

export const countAtom = atom(60);

// implement the useTimer hook here
export const useTimer = () => {
  const [count, setCount] = useAtom(countAtom);
  const timer = useRef(null);

  useEffect(() => {
    return stopTimer;
  }, []);

  const startTimer = () => {
    timer.current = setInterval(() => {
      setCount((c) => {
        if (c === 0) {
          clearInterval(timer.current);
          return 0;
        }
        return c - 1;
      });
    }, 1000);
  };

  const stopTimer = () => {
    if (timer.current) clearInterval(timer.current);
  };

  const resetTimer = () => {
    setCount(60);
  };

  // export all the fields and functions that are needed
  // you will need to create some atoms to store the data
  return {
    startTimer,
    stopTimer,
    resetTimer,
    count,
  };
};
