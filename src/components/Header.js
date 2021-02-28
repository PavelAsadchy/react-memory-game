import { Timer } from './Timer';

export const Header = ({ name, round, endRound, endGame, time }) => {
  return (
    <>
      <div>Round: {round}</div>
      <div>Player: {name}</div>
      <div>
        <Timer
          endGame={endGame}
          time={time}
          endRound={endRound}
          />
      </div>
    </>
  );
};
