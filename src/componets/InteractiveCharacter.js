import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "tailwindcss/tailwind.css";
import personagemImg from "./assets/personagem.png";

const InteractiveCharacter = () => {
  const [message, setMessage] = useState("Olá! Explore a página!");
  const [showBubble, setShowBubble] = useState(true);

  useEffect(() => {
    const hideBubble = setTimeout(() => setShowBubble(false), 3000);
    return () => clearTimeout(hideBubble);
  }, []);

  const handleHover = () => {
    setMessage("Isso parece interessante!  😃");
    setShowBubble(true);
  };

  const handleScroll = () => {
    setMessage("Uau, tem mais coisas aqui embaixo! 👀");
    setShowBubble(true);
  };

  const handleIntro = () => {
    setMessage("Minha criadora se chama Ally! Ela ama bolo gourmet e sempre cantarola pra mim sobre BOLOOO! 🎶🎂");
    setShowBubble(true);
  };

   const handleFala = () => {
    setMessage("Sabia que eu amo coelhos? São muito fofos.🐰");
    setShowBubble(true);
  };

  useEffect(() => {
    setTimeout(handleIntro, 5000);
  }, []);

  return (
    <div className="fixed bottom-10 left-10 flex items-center">
      {/* Personagem (Imagem ou futura animação) */}
      <motion.img
        src={personagemImg}
        alt="Personagem interativa"
        className="w-24 h-24 rounded-full"
        whileHover={{ scale: 1.1 }}
        onMouseEnter={handleHover}
      />
      
      {/* Balão de fala */}
      {showBubble && (
        <motion.img
        src="/char.png" 
        alt="Personagem interativa"
        className="w-24 h-24 rounded-full"
        whileHover={{ scale: 1.1 }}
        onMouseEnter={handleHover}
      />
      
      )}
    </div>
  );
};

export default InteractiveCharacter;