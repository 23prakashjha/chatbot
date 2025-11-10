import React from 'react';
import axios from 'axios';

export default function PromptButton({ prompt }) {
  const handleClick = async () => {
    const res = await axios.post('https://chatbot-sux9.onrender.com/api/chatbot/ask', { question: prompt });
    alert(`Chatbot: ${res.data.answer}`);
  };

  return (
    <button 
      onClick={handleClick} 
      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
    >
      {prompt}
    </button>
  );
}
