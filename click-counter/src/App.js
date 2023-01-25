import logo from './img/logo.png';
import Button from './components/button'
import Counter from './components/counter';
import { useState } from 'react';
import './App.css';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const touchClick = () => {
    setNumClicks(numClicks + 1);
  }

  const resetCounter = () =>{
    setNumClicks(0);
    ;
  }
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>

        <img
        className='freecodecamp-logo'
        src = {logo}
        alt='Logo de freeCodeCamp' />

      </div>

      <div className='contenedor-principal'>

        <Counter 
            numClicks = {numClicks} />

        <Button 
        text = 'Click'
        isButtonClick = {true}
        touchClick = {touchClick} />
        <Button 
        text = 'Reset'
        isButtonClick = {false}
        touchClick = {resetCounter} />

      </div>
    </div>
  );
}

export default App;
