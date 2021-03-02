import Button from 'react-bootstrap/Button';

export const EndRound = ({ setNextRound }) => {
  return (
    <>
      <p>
        Well done, go to next round!
      </p>
      <Button
        variant="primary"
        onClick={() => setNextRound(true)}
      >
        I'm ready
      </Button>
    </>
  )
};
