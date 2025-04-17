import React, { useState } from "react";
import axios from "axios";

const CriarUsuario: React.FC = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [carregando, setCarregando] = useState(false);

  const cadastrarUsuario = async () => {
    if (!nome || !email) {
      setMensagem("Por favor, preencha todos os campos.");
      return;
    }

    setCarregando(true);
    setMensagem("");

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        {
          name: nome,
          email: email,
        }
      );

      if (response.status === 201) {
        setMensagem("Usuário cadastrado com sucesso!");
      }
    } catch (error) {
      setMensagem("Ocorreu um erro ao cadastrar o usuário.");
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 rounded-2xl shadow-md bg-white">
      <h1 className="text-xl font-bold mb-4">Cadastrar Novo Usuário</h1>
      
      <div className="flex flex-col gap-4 mb-4">
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 w-full"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 w-full"
        />
      </div>

      <button
        onClick={cadastrarUsuario}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Cadastrar
      </button>

      {carregando && <p className="mt-4">Enviando dados...</p>}

      {mensagem && (
        <p
          className={`mt-4 ${
            mensagem.includes("erro") ? "text-red-500" : "text-green-500"
          }`}
        >
          {mensagem}
        </p>
      )}
    </div>
  );
};

export default CriarUsuario;
