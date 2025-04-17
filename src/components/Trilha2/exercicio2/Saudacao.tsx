import React, { useState } from 'react';

interface SaudacaoProps {
  nomeInicial: string;
}

const Saudacao: React.FC<SaudacaoProps> = ({ nomeInicial }) => {
  const [nome, setNome] = useState(nomeInicial);

  return (
    <div>
      <h2>Olá, {nome}!</h2>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Digite seu nome"
      />
    </div>
  );
};

export default Saudacao;
