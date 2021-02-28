export const Card = ({ card, handleClick }) => {
  return (
    <div
      className="card card-blank"
      data-check="false"
      data-name={card.name}
      style={{backgroundImage: `url(${card.pic})`}}
      onClick={handleClick}
    >
    </div>
  );
};
