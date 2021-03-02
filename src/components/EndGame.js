import Button from 'react-bootstrap/Button';

export const EndGame = ({ newGame }) => {
  return (
    <>
    <p>
      You've played well!
    </p>
    <Button onClick={() => newGame(true)}>Try again</Button>
    </>
  );
};
