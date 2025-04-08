import React, { useState } from "react";
import "./Botzinha.css";
import "./Botzinha.css";

const Botzinha = () => {
  const falas = [
    "Oi! Eu sou a Susy 👋",
    "Amo coelhos 🐰🐇",
    "Minha dona Ally que me criou, ela é muito fofa hahahaha.",
    "Ei, não me cutuque Baka!",
    "Rum, faz cara feia.",
  ];

  const [mensagem, setMensagem] = useState(falas[0]); // Mensagem que aparece no balão
  const [cliques, setCliques] = useState(0); // Contador de cliques
  const [brava, setBrava] = useState(false); // Define se a imagem brava aparece

  const handleClique = () => {
    if (cliques < 2) {
      setMensagem(falas[cliques + 3]); // Mostra fala de "cutucada"
      setBrava(true); // Muda para expressão brava
      setCliques(cliques + 1);
    } else {
      setMensagem(falas[1 + Math.floor(Math.random() * 2)]); // Fala fofa aleatória
      setBrava(false); // Volta para fofa
    }
  };

  return (
    <div className="botzinha-container">
       <div className="susy-wrapper">
        <div className="fala-botzinha">{mensagem}</div>
        <img
          className="imagem-botzinha"
          onClick={handleClique}
          src={brava ? "/image/Susy_raiva.gif" : "/image/Susy-normal.gif"}
          alt="Susy"
        />
      </div>
    </div>
  );
};

export default Botzinha;
