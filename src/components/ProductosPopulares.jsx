import React from "react";
import { celulares } from "../data/data";
import "../assets/ProductosPopulares.css";
import { Link } from "react-router-dom";

const PopularProducts = () => {
  return (
    <section className="popular-container">
      <h2>Popular en StankTech</h2>
      <div className="productos-grid">
        {celulares.map((celular) => (
          <div className="producto-card" key={celular.id}>
            <img src={celular.fotos[0]} alt={celular.nombre} />
            <h3>{celular.nombre}</h3>
            <p>Desde ${celular.precio} USD</p>
            <Link to={`/productos/${celular.id}`} className="comprar-btn">
              Comprar
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
