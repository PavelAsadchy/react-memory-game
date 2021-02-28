import { useState, useEffect } from 'react';
import { Card } from './Card';
import { CARD_BLANK_CLASS, CHECK, NAME } from '../consts/const';

let onSelect = false;

export const CardList = ({ cards, endRound }) => {
  const [selectedCards, setSelectedCards] = useState({
    prev: null,
    current: null,
  });

  useEffect(() => {
    const blancCards = document.getElementsByClassName('card-blank');
    if (blancCards.length === 0) {
      endRound(true);
      const reset = document.getElementsByClassName('card');
      Array.from(reset).forEach(card => {
        card.classList.add('card-blank');
        card.setAttribute(CHECK, 'false');
      })
    }
  });

  const flipCard = (card) => {
    if (card.getAttribute(CHECK) === 'true') {
      card.setAttribute(CHECK, 'false');
      card.classList.add(CARD_BLANK_CLASS);
    } else {
      card.setAttribute(CHECK, 'true');
      card.classList.remove(CARD_BLANK_CLASS);
    }
  }

  const isEqual = (card1, card2) => {
    return card1.getAttribute(NAME) === card2.getAttribute(NAME);
  };

  const clearSelectedCards = () => {
    setSelectedCards({
      prev: null,
      current: null,
    });
  };

  const handleClick = (e) => {
    if (onSelect) return;

    const resetFlippedCards = () => {
      flipCard(selectedCards.prev);
      flipCard(currentCard);
      onSelect = false;
    };

    const currentCard = e.target;
    if (currentCard.getAttribute(CHECK) === 'true') return;
    if (currentCard.getAttribute(CHECK) === 'found') return;
    flipCard(currentCard);
    if (selectedCards.prev) {
      onSelect = true;
      if (!isEqual(selectedCards.prev, currentCard)) {
        setTimeout(resetFlippedCards, 1500);
        clearSelectedCards();
      } else {
        selectedCards.prev.setAttribute(CHECK, 'found');
        currentCard.setAttribute(CHECK, 'found');
        clearSelectedCards();
        onSelect = false;
      }
    } else {
      setSelectedCards({
        ...selectedCards,
        prev: currentCard,
        current: null,
      });
    }
  };

  return (
    <div className={cards.length <= 8
      ? "card-list"
      : "card-list-extended"
    }>
      {cards.map((card, index) => {
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
