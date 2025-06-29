import { Link, NavLink } from 'react-router-dom';
import { marcas } from '../data/data';
import logo from '../assets/logostank.png';
import '../assets/Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="StankTech logo" />
        </Link>
        <nav className="navbar-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/quienes-somos">Quienes Somos</NavLink>

          <div className="dropdown">
            <div className="dropbtn">Ver todos ▾</div>
            <div className="dropdown-content">
              <NavLink to="/productos">Todos los productos</NavLink>
              {marcas.map(marca => (
                <NavLink key={marca.id} to={`/productos/${marca.id}`}>
                  {marca.nombre}
                </NavLink>
              ))}
            </div>
          </div>


          <NavLink to="/contacto">Contacto</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;



