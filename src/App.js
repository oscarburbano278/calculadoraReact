import './App.css';
import imagenLogo from './imagenes/imgLogo.png';

function App() {
  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img
        src={imagenLogo}
        className='logo'
        alt='logo de calculadora'
        />
      </div>
      <div className='contenedorPrincipal'>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
      </div>
    </div>
  );
}

export default App;
