import React from 'react';

const useTimer = (t) => {
  const [time, setTime] = React.useState(t);
  const [_, setTimerInterval] = React.useState(null);

  const stopTimer = () =>
    setTimerInterval((interval) => {
      if (interval) {
        clearInterval(interval);
        return null;
      }
    });

  React.useEffect(() => {
    const interval = setInterval(
      () =>
        setTime(({ min, sec }) => {
          if (min === 0 && sec === 0) {
            stopTimer();
          } else if (sec === 0) {
            min--;
            sec = 59;
          } else {
            sec--;
          }

          return { min, sec };
        }),
      1000,
    );

    setTimerInterval(interval);
    return stopTimer;
  }, []);

  return [time, stopTimer];
};

export default useTimer;
