import { useState, useEffect } from 'react';

export const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(5);

  useEffect(() => {

      setTimeout(() => {
        setTimeLeft(countDown())
      }, 1000)

  });

  const countDown = () => {
    return timeLeft > 0
    ? timeLeft - 1
    : timeLeft;
  };

  const startTimer = () => {
    if (timeLeft > 0) {
      setTimeLeft()
    }
  };

  return (
    <div className="timer">
      <span>Timer: </span>
      <span>{timeLeft}</span>
    </div>
  )
}