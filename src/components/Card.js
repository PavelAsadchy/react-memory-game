export const Card = ({ card, handleClick }) => {
  return (
    <div
      className="card"
      style={{background: `url(${card.pic})`}}
      onClick={handleClick}
      >
    </div>
  );
};
