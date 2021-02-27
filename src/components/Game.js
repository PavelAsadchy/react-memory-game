import { useState } from 'react';
import { CardList } from './CardList';
import { Header } from './Header';
import { EndRound } from './EndRound';
import { CARDS } from '../consts/cards';

export const Game = ({ name }) => {
  const [game, setGame] = useState({
    round: 1,
    endRound: false,
    endGame: false,
  });

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const end = 0 + Math.pow(2, game.round);
  const slicedCards = CARDS.slice(0, end);
  const doubledCards = slicedCards.concat([...slicedCards]);
  shuffleArray(doubledCards);

  const handleEndRound = (boolean) => {
    if (boolean) {
      setGame({
        ...game,
        endRound: true,
      })
    }
  };

  const handleNextRound = (boolean) => {
    if (boolean) {
      setGame({
        ...game,
        round: game.round + 1,
        endRound: false,
      });
    }
  }

  return (
    <div className="game">
      <div className="header">
        <Header
          name={name}
          round={game.round}
        />
      </div>
      {game.endRound
        ? null
        : <div className="gameplay">
            <CardList
              cards={doubledCards}
              endRound={handleEndRound}
            />
          </div>}
      {game.endRound
        ? <div className="end-round">
            <EndRound setNextRound={handleNextRound}/>
          </div>
        : null}
    </div>
  );
};
