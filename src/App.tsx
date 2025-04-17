import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Button from './components/Trilha1/exercicio1/exercicio1Button';
import ProfileCard from './components/Trilha1/exercicio2/Card';
import imagem from './assets/img/eu.jpeg';
import Gallery from './components/Trilha1/exercicio4/Gallery';
import Navbar from './components/Trilha1/exercicio5/Navbar';
import ContactForm from './components/Trilha1/exercicio6/ContactForm';

import Contador from './components/Trilha2/exercicio1/Contador';
import Saudacao from './components/Trilha2/exercicio2/Saudacao';
import ListaTarefas from './components/Trilha2/exercicio3/ListaTarefas';
import ToggleVisibilidade from './components/Trilha2/exercicio4/ToggleVisibilidade';

import Exercicio1 from './components/Trilha3/exercicio1/MenuNav'; 


/////////////////////////////////////////////////////////
import faker from './assets/img/faker.webp';
import wizer from './assets/img/wizer.webp';
import cariok from './assets/img/cariok.webp';
import faker2 from './assets/img/faker2.jpg';
import wizer2 from './assets/img/wizer2.png'; 
import cariok2 from './assets/img/cariok2.png';
import pain from './assets/img/pain.png';

const App: React.FC = () => {
  const [trilhaAtiva, setTrilhaAtiva] = useState<number | null>(null);
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

  const renderExercicios = () => {
    if (trilhaAtiva === 1) {
      return (
        <>
          <div style={{ marginBottom: '20px' }}>
            <button onClick={() => setExercicioAtivo(1)}>Exercício 1</button>
            <button onClick={() => setExercicioAtivo(2)}>Exercício 2 e 3</button>
            <button onClick={() => setExercicioAtivo(3)}>Exercício 4</button> 
            <button onClick={() => setExercicioAtivo(4)}>Exercício 5</button>
            <button onClick={() => setExercicioAtivo(5)}>Exercício 6</button>
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
          
          {exercicioAtivo === 4 && (
            <>
              <h2>Navbar flex</h2>
              <Navbar />
            </>
          )}

          {exercicioAtivo === 5 && (
            <>
              <h2>Formulário Estilizado</h2>
              <ContactForm />
            </>
          )}
        </>
      );
    }

    if (trilhaAtiva === 2) {
      return (
        <>
          <div style={{ marginBottom: '20px' }}>
            <button onClick={() => setExercicioAtivo(6)}>Exercício 1 - Contador</button>
            <button onClick={() => setExercicioAtivo(7)}>Exercício 2 - Saudação</button>
            <button onClick={() => setExercicioAtivo(8)}>Exercício 3 - Lista de Tarefas</button>
            <button onClick={() => setExercicioAtivo(9)}>Exercício 4 - Visibilidade</button>
          </div>
    
          {exercicioAtivo === 6 && (
            <>
              <h2>Contador Simples</h2>
              <Contador valorInicial={0} />
            </>
          )}
    
          {exercicioAtivo === 7 && (
            <>
              <h2>Saudação Personalizada</h2>
              <Saudacao nomeInicial="" />
            </>
          )}
    
          {exercicioAtivo === 8 && (
            <>
              <h2>Lista de Tarefas</h2>
              <ListaTarefas tarefasIniciais={['']} />
            </>
          )}
    
          {exercicioAtivo === 9 && (
            <>
              <h2>Controle de Visibilidade</h2>
              <ToggleVisibilidade texto="verdade oculta sobre todas as coisas" />
            </>
          )}
        </>
      );
    }

    if (trilhaAtiva === 3) {
      return (
        <>
          <div style={{ marginBottom: '20px' }}>
            <button onClick={() => setExercicioAtivo(10)}>Exercício 1</button>
            {/* Adicione mais botões aqui conforme for criando mais exercícios */}
          </div>

          {exercicioAtivo === 10 && (
            <>
              <h2>Exercício 1 - React Router</h2>
              <Exercicio1 />
            </>
          )}
        </>
      );
    }
  };

  return (
    <Router>
  <div>
    <h1>Escolha a Trilha</h1>
    <div style={{ marginBottom: '20px' }}>
      <button onClick={() => setTrilhaAtiva(1)}>Trilha 1</button>
      <button onClick={() => setTrilhaAtiva(2)}>Trilha 2</button>
      <button onClick={() => setTrilhaAtiva(3)}>Trilha 3</button>
    </div>
    {renderExercicios()}
  </div>
</Router>

  );
};

export default App;
