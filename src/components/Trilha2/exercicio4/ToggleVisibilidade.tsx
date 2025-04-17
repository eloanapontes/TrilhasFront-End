import React, { useState } from 'react';

interface ToggleVisibilidadeProps {
  texto: string;
}

const ToggleVisibilidade: React.FC<ToggleVisibilidadeProps> = ({ texto }) => {
  const [visivel, setVisivel] = useState<boolean>(false);

  const alternarVisibilidade = () => {
    setVisivel(!visivel);
  };

  return (
    <div>
      <button onClick={alternarVisibilidade}>
        {visivel ? 'Ocultar' : 'Mostrar'}
      </button>
      {visivel && <p>{texto}</p>}
    </div>
  );
};

export default ToggleVisibilidade;
