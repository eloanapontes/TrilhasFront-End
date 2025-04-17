import React, { useState } from 'react';
import './Contador.css';

interface ContadorProps {
  valorInicial: number;
}

const Contador: React.FC<ContadorProps> = ({ valorInicial }) => {
  const [contador, setContador] = useState(valorInicial);

  return (
    <div className="contador-container">
      <h3>Valor contado: {contador}</h3>
      <div className="botoes">
        <button onClick={() => setContador(contador - 1)}>-</button>
        <button onClick={() => setContador(contador + 1)}>+</button>
      </div>
    </div>
  );
};

export default Contador;
