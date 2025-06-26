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
    <div>
      <h1>Contacto</h1>
      <form onSubmit={handleSubmit} className="form-contacto">
        <input type="text" name="nombre" placeholder="Tu nombre" value={form.nombre} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Tu email" value={form.email} onChange={handleChange} required />
        <textarea name="mensaje" placeholder="Tu mensaje" rows="5" value={form.mensaje} onChange={handleChange} required />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;

