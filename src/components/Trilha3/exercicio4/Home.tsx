
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Sistema de Reservas de Hotel</h1>
      <Link to="/rooms">Ver Quartos Disponíveis</Link>
    </div>
  );
};

export default Home;
