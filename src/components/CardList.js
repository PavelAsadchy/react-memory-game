import { CARDS } from '../consts/cards';
import { Card } from './Card';

export const CardList = () => {
  const handleClick = (e) => {
    console.log(e.target);
  };

  return (
    <div className="cardList">
      {CARDS
        .sort(() => Math.random() - 0.5)
        .map((card, index) => {
          return (
              <Card
                key={index}
                card={card}
                handleClick={handleClick}
              />
          );
        })}
    </div>
  );
};
