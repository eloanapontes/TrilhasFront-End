import React, { useState } from 'react';
import Button from './components/Trilha1/exercicio1/exercicio1Button';
import ProfileCard from './components/Trilha1/exercicio2/Card';
import imagem from './assets/img/eu.jpeg';
import Gallery from './components/Trilha1/exercicio4/Gallery';
import faker from './assets/img/faker.webp';
import wizer from './assets/img/wizer.webp';
import cariok from './assets/img/cariok.webp';
import faker2 from './assets/img/faker2.jpg';
import wizer2 from './assets/img/wizer2.png'; 
import cariok2 from './assets/img/cariok2.png';
import pain from './assets/img/pain.png';

const App: React.FC = () => {
  const [exercicioAtivo, setExercicioAtivo] = useState<number | null>(null);

  const imagensGaleria = [
    faker,
    wizer,
    cariok,
    faker2,
    wizer2,
    cariok2,
    pain
  ];

  const handleClick = () => {
    alert('Você clicou no botão!');
  };

  return (
    <div>
      <center>
        <h1>Trilha 1 - Front-End</h1>

        <div style={{ marginBottom: '20px' }}>
          <button onClick={() => setExercicioAtivo(1)}>Exercício 1</button>
          <button onClick={() => setExercicioAtivo(2)}>Exercício 2 e 3</button>
          <button onClick={() => setExercicioAtivo(3)}>Exercício 4</button> 
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

        {exercicioAtivo === 3 && (
          <>
            <h2>Galeria de Imagens</h2>
            <Gallery imagens={imagensGaleria} />
          </>
        )}
      </center>
    </div>
  );
};

export default App;
