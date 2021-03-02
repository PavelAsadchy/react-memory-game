import { useState } from 'react';
import useSound from 'use-sound';
import soundTrack from './assets/sound/Portishead - Glory Box (minus).mp3';
import Button from 'react-bootstrap/Button';
import { Login } from './components/Login';
import { Game } from './components/Game';
import './App.css';

function App() {
  const [sound, setSound] = useState(false);
  const [state, setState] = useState({
    showLogin: true,
    showgame: false,
    name: null,
    score: 0,
  });

  const [play, { stop }] = useSound(soundTrack);

  const handleName = (name) => {
    setState({
      ...state,
      showLogin: false,
      name,
    });
  };

  const handleSound = () => {
    if (sound) {
      stop();
    } else {
      play()
    }
    setSound(!sound);
  };

  return (
    <div>
      <Button
        className="sound"
        onClick={handleSound}
      >
        <i className={sound ? "bi bi-volume-up" : "bi bi-volume-mute"}></i>
      </Button>
      {state.showLogin
        ? <Login handleName={handleName}/>
        : <Game name={state.name}/>}
    </div>
  );
}

export default App;
