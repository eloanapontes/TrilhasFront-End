import React from 'react';
import { useParams } from 'react-router-dom';

const Animal: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Animal Selecionado</h2>
      <p>Nome do bichano: <strong>{name}</strong></p>
    </div>
  );
};

export default Animal;
