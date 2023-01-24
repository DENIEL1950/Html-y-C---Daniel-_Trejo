import logo from './logo.svg';
import './App.css';
import Saludos from './components/Saludos';
import Ejercicio from './components/Ejercicio';
import Tareas from './components/tareas';

function App() {
  return (
    <div className="App">
      <h1>Primeros pasos con React</h1>
      <h2>Me llamo Daniel Trejo</h2>
      <Saludos nombre = "Daniel" apellido ="Posligua"/>
      <Ejercicio nombre = "Steffano" edad = "18" pasatiempo = "escuchar musica"/>
      <Tareas/>

    </div>
  );
}

export default App;
