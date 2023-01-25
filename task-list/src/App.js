
import './App.css';
import Imagenes from './componentes/imagenes';
import ListaDeTareas from './componentes/listaDeTareas';

function App() {
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>

      <Imagenes
      image = 'logo'
      className='freecodecamp-logo' 
      alt = 'Logo de freeCodeCamp'
      />
      </div>
      <div className= 'tareas-lista-principal'>
        <h1> Mis Tareas </h1>
        <ListaDeTareas></ListaDeTareas>
      </div>
    </div>
  );
}

export default App;
