
import './App.css';
import Boton from './componentes/boton';
import BotonClear from './componentes/botonClear';
import Pantalla from './componentes/pantalla';
import { useState } from 'react';
import {evaluate} from 'mathjs';
import Imagenes from './componentes/imagenes';


function App() {
  const [input,setInput] = useState('');

  const agregarInput = valor => {
    setInput(input + valor);
  };

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert('Por favor ingrese un valor')
    }
  };

  return (
    <div className='App'>
      
      <div className='freecodecamp-logo-contenedor'>

        <Imagenes
        image = 'logo'
        className='freecodecamp-logo' 
        alt = 'Logo de freeCodeCamp'
        />

      </div>

      <div className='contenedor-calculadora'>
        <Pantalla input = {input} />
        

        <div className='fila'>
          <Boton manejarClic= {agregarInput}>1</Boton>
          <Boton manejarClic= {agregarInput}>2</Boton>
          <Boton manejarClic= {agregarInput}>3</Boton>
          <Boton manejarClic= {agregarInput}>+</Boton>
          
        </div>

        <div className='fila'>
          <Boton manejarClic= {agregarInput}>4</Boton>
          <Boton manejarClic= {agregarInput}>5</Boton>
          <Boton manejarClic= {agregarInput}>6</Boton>
          <Boton manejarClic= {agregarInput}>-</Boton>
        </div>

        <div className='fila'>
          <Boton manejarClic= {agregarInput}>7</Boton>
          <Boton manejarClic= {agregarInput}>8</Boton>
          <Boton manejarClic= {agregarInput}>9</Boton>
          <Boton manejarClic= {agregarInput}>*</Boton>
        </div>

        <div className='fila'>
          <Boton manejarClic= {calcularResultado}>=</Boton>
          <Boton manejarClic= {agregarInput}>0</Boton>
          <Boton manejarClic= {agregarInput}>.</Boton>
          <Boton manejarClic= {agregarInput}>/</Boton>
        </div>

        <div className='fila'>
        <BotonClear manejarClear = {() => setInput('')} >
          Clear
        </BotonClear>
        </div>
        

      </div>
    </div>
  );
}

export default App;
