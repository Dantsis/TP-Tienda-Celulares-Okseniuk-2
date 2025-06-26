import { useParams } from 'react-router-dom';
import { celulares } from '../data/data';

const ProductoDetalle = () => {
  const { idCelular } = useParams();
  const celular = celulares.find(c => c.id === parseInt(idCelular));

  if (!celular) return <p>Producto no encontrado</p>;

  return (
    <div>
      <h1>{celular.nombre}</h1>
      <div style={{ display: 'flex', gap: '1rem' }}>
        {celular.fotos.map((foto, idx) => (
          <img key={idx} src={foto} alt={`${celular.nombre} foto ${idx + 1}`} style={{ width: '300px' }} />
        ))}
      </div>
      <p>{celular.descripcion}</p>
      <p><strong>Precio: ${celular.precio}</strong></p>
    </div>
  );
};

export default ProductoDetalle;
