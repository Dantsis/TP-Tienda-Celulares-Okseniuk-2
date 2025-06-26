import logo from '../assets/logostank.png';
import '../assets/QuienesSomos.css';

const QuienesSomos = () => {
  return (
    <div className="quienes-container">
      <h1>Quiénes Somos</h1>
      <p>Somos StankTech, la tienda de celulares N°1 liderada por Gabriel Stancanelli</p>
      <img src={logo} alt="StankTech logo" className="logo-grande-abajo" />
    </div>
  );
};

export default QuienesSomos;


