import React from 'react';
import "./exercicio1Button.css";

interface ButtonProps {
  texto: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ texto, onClick }) => {
  return (
    <button className="botao-estilizado" onClick={onClick}>
      {texto}
    </button>
  );
};

export default Button;
