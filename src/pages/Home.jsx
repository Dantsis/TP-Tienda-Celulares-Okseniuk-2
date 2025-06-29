import React from "react";
import PopularProducts from "../components/ProductosPopulares";
import "../assets/Home.css";
import celularesBanner from "../assets/celulares.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <h1>
          Tecnología <strong>reforzada</strong>.
        </h1>
        <p className="hero-subtext">Mas potente que nunca.</p>
        <Link to="/productos" className="ver-telefonos-btn">
          Ver teléfonos
        </Link>

        <img src={celularesBanner} alt="Banner celulares" className="hero-image" />
      </section>

      <PopularProducts />
    </div>
  );
};

export default Home;


