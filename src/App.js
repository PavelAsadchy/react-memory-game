import { useState } from 'react';
import { Login } from './components/Login';
import { Game } from './components/Game';
import './App.css';

function App() {
  const [ state, setState ] = useState({
    showLogin: true,
    showgame: false,
    name: null,
    score: 0,
  });

  const handleName = (name) => {
    setState({
      ...state,
      showLogin: false,
      name,
    });
  }

  return (
    <div>
      {state.showLogin
        ? <Login handleName={handleName}/>
        : <Game name={state.name}/>}
    </div>
  );
}

export default App;
