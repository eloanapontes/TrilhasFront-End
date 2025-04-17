import React, { useState } from "react";
import axios from "axios";

interface Usuario {
  id: number;
  name: string;
  email: string;
}

const BuscarUsuario: React.FC = () => {
  const [id, setId] = useState("");
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [erro, setErro] = useState("");

  const buscarUsuario = async () => {
    if (!id) {
      setErro("Por favor, insira um ID.");
      setUsuario(null);
      return;
    }

    try {
      const resposta = await axios.get<Usuario>(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      setUsuario(resposta.data);
      setErro("");
    } catch (e) {
      setUsuario(null);
      setErro("Usuário não encontrado.");
    }
  };

  return (
    <div className="buscar-usuario">
      <h2>Buscar Usuário pelo ID</h2>
      <input
        type="number"
        placeholder="Digite o ID do usuário"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={buscarUsuario}>Buscar</button>

      {erro && <p style={{ color: "red" }}>{erro}</p>}

      {usuario && (
        <div>
          <h3>Informações do Usuário:</h3>
          <p><strong>Nome:</strong> {usuario.name}</p>
          <p><strong>Email:</strong> {usuario.email}</p>
        </div>
      )}
    </div>
  );
};

export default BuscarUsuario;
