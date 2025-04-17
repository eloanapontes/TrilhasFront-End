import React, { useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm: React.FC = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Manda um Zap!</h2>
      <input
        type="text"
        placeholder="digite seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="digite seu e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <textarea
        placeholder="digite sua mensagem"
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
        required
      ></textarea>
      <button type="submit">ENVIAR</button>
    </form>
  );
};

export default ContactForm;
