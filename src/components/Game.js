import { CardList } from './CardList';
import { CARDS } from '../consts/cards';

export const Game = () => {
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const end = 3 * Math.pow(2, 1);
  const slicedCards = CARDS.slice(0, end);
  const doubledCards = slicedCards.concat([...slicedCards]);
  shuffleArray(doubledCards);

  return (
    <div className="game">
      <CardList cards={doubledCards}/>
    </div>
  );
};
