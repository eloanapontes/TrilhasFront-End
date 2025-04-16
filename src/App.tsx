import React, { useState } from 'react';
import Button from './components/Trilha1/exercicio1/exercicio1Button';
import ProfileCard from './components/Trilha1/exercicio2/Card';
import imagem from './assets/img/eu.jpeg'; 

const App: React.FC = () => {
  const [exercicioAtivo, setExercicioAtivo] = useState<number | null>(null);

  const handleClick = () => {
    alert('Você clicou no botão!');
  };

  return (
    <div>
      <center>
        <h1>Trilha 1 - Front-End</h1>

        <div style={{ marginBottom: '20px' }}>
          <button onClick={() => setExercicioAtivo(1)}>Exercício 1</button>
          <button onClick={() => setExercicioAtivo(2)}>Exercício 2</button>
        </div>

        {exercicioAtivo === 1 && (
          <>
            <h2>Botão Estilizado</h2>
            <Button texto="Clique aqui" onClick={handleClick} />
          </>
        )}

        {exercicioAtivo === 2 && (
          <>
            <h2>Cartão de Perfil</h2>
            <ProfileCard
              nome="Eloana Pontes"
              descricao="Estudante de TADS, apaixonada por tecnologia, design gráfico, jogos, música e fuscas!"
              imagemUrl={imagem}
            />
          </>
        )}
      </center>
    </div>
  );
};

export default App;
