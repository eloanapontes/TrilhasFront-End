import React from 'react';
import { Link } from 'react-router-dom';

const Menu: React.FC = () => {
  return (
    <nav style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
      <Link to="/home">Home</Link>
      <Link to="/about">Sobre</Link>
      <Link to="/contact">Contato</Link>
    </nav>
  );
};

export default Menu;
