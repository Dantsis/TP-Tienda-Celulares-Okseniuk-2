import { useParams, Link } from 'react-router-dom';
import { celulares } from '../data/data';
import '../assets/Productos.css';

const Productos = () => {
  const { idMarca } = useParams();
  const filtrados = idMarca ? celulares.filter(c => c.marcaId === parseInt(idMarca)) : celulares;

  return (
    <div>
      <h1>Productos</h1>
      <div className="product-grid">
        {filtrados.map(cel => (
          <div key={cel.id} className="card-celular">
            <img src={cel.fotos[0]} alt={cel.nombre} />
            <h3>{cel.nombre}</h3>
            <p>{cel.descripcion}</p>
            <p><strong>${cel.precio}</strong></p>
            <Link to={`/producto/${cel.id}`}>Ver más</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;

