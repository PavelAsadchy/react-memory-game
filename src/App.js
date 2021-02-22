import { useState } from 'react';
import { Login } from './components/Login';
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
    console.log(name);
  }

  return (
    <div>
      {state.showLogin ? <Login handleName={handleName}/> : null}
    </div>
  );
}

export default App;
