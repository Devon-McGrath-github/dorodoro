import React, { useState, useEffect, useRef } from 'react';

export interface TimerProps {
  duration: number;
}

export default function CountdownApp({ duration }: TimerProps) {
  const [secondsRemaining, setSecondsRemaining] = useState(duration);
  const [countingDown, setCountingDown] = useState(false);

  const secondsToDisplay = secondsRemaining % 60;
  const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60;
  const minutesToDisplay = minutesRemaining % 60;

  const handleClick = () => {
    setCountingDown(!countingDown);
  };

  const handleReset = () => {
    setCountingDown(false);
    setSecondsRemaining(duration);
  };

  useInterval(
    () => {
      if (secondsRemaining > 0) {
        setSecondsRemaining(secondsRemaining - 1);
      } else {
        setCountingDown(false);
      }
    },
    countingDown ? 1000 : null
    // passing null stops the interval
  );
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-3">
      <div className="col-span-2">
        <h1 className="text-6xl text-center">
          {twoDigits(minutesToDisplay)}:{twoDigits(secondsToDisplay)}
        </h1>
      </div>

      <button
        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        onClick={handleClick}
        type="button"
      >
        {countingDown ? 'Stop' : 'Start'}
      </button>

      <button
        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        onClick={handleReset}
        type="button"
      >
        Reset
      </button>
    </div>
  );
}

// custom hook from dan abramov
// source: https://overreacted.io/making-setinterval-declarative-with-react-hooks/
function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef<(() => void) | null>(null);

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      if (savedCallback.current !== null) {
        savedCallback.current();
      }
    }

    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const twoDigits = (num: number) => String(num).padStart(2, '0');
