import { useState } from 'react';
import '../assets/Contacto.css';

const Contacto = () => {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensaje enviado');
    setForm({ nombre: '', email: '', mensaje: '' });
  };

  return (
    <section className="contacto-section">
      <h1>¿Querés hablar con nosotros?</h1>
      <p className="subtext">
        Dejanos tu mensaje y te respondemos lo antes posible.
      </p>
      <form onSubmit={handleSubmit} className="form-contacto">
        <div className="input-wrapper">
          <span className="input-icon"></span>
          <input
            type="text"
            name="nombre"
            placeholder="Tu nombre"
            value={form.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-wrapper">
          <span className="input-icon"></span>
          <input
            type="email"
            name="email"
            placeholder="Tu email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-wrapper">
          <span className="input-icon mensaje"></span>
          <textarea
            name="mensaje"
            placeholder="Tu mensaje"
            rows="5"
            value={form.mensaje}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contacto;

