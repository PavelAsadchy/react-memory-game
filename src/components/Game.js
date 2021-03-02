import { useState } from 'react';
import { CardList } from './CardList';
import { Header } from './Header';
import { EndRound } from './EndRound';
import { EndGame } from './EndGame';
import { CARDS } from '../consts/cards';
import { CHECK } from '../consts/const';

export const Game = ({ name }) => {
  const [game, setGame] = useState({
    round: 1,
    endRound: false,
    endGame: false,
    time: 60,
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

  const resetCards = (boolean) => {
    if (boolean) {
      const reset = document.getElementsByClassName('card');
      Array.from(reset).forEach(card => {
        card.classList.add('card-blank');
        card.setAttribute(CHECK, 'false');
      });
    }
  }

  const handleEndRound = (boolean) => {
    if (boolean) {
      setGame({
        ...game,
        endRound: true,
      });
    }
  };

  const handleNextRound = (boolean) => {
    if (boolean) {
      setGame({
        ...game,
        round: game.round + 1,
        endRound: false,
      });
      resetCards(true);
    }
  };
  
  const handleEndGame = (boolean) => {
    if (boolean) {
      setGame({
        ...game,
        endGame: true,
        time: 60,
      });
      resetCards(true);
    }
  };

  const handleNewGame = (boolean) => {
    if (boolean) {
      setGame({
        ...game,
        round: 1,
        endRound: false,
        endGame: false,
        time: 60,
      });
    }
  };

  return (
    <div className="game">
      {game.endRound
        ? <div className="end-round">
            <EndRound setNextRound={handleNextRound}/>
          </div>
        : <div className="container">
            <div className="header">
              <Header
                name={name}
                round={game.round}
                time={game.time}
                endRound={game.endRound}
                endGame={handleEndGame}
              />
            </div>
            <div className="gameplay">
              <CardList
                cards={doubledCards}
                endRound={handleEndRound}
              />
            </div>
          </div>}
      {game.endGame
        ? <div className="end-game">
            <EndGame newGame={handleNewGame} />
          </div>
        : null}
    </div>
  );
};
