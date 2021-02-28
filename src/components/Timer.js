import { useState, useEffect } from 'react';

export const Timer = ({ endRound, endGame, time }) => {
  const [timeLeft, setTimeLeft] = useState(time);

  const countDown = () => timeLeft -1;
  
  useEffect(() => {
    if (!endRound) {
      if (timeLeft === 0) {
        endGame(true);
      } else if (timeLeft > 0) {
        setTimeout(() => {
          setTimeLeft(countDown())
        }, 1000);
      }
    }
  }, [timeLeft]);

  return (
    <div className="timer">
      <span>Timer: </span>
      <span>{timeLeft}</span>
    </div>
  );
};
