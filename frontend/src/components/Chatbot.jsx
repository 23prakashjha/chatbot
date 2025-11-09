import React, { useState } from 'react';
import axios from 'axios';

export default function Chatbot({ name }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    try {
      const res = await axios.post('http://localhost:5000/api/chatbot/ask', {
        question: input,
      });
      const botMsg = { sender: 'bot', text: res.data.answer };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error('Error:', err);
      const botMsg = {
        sender: 'bot',
        text: 'Sorry, something went wrong on the server.',
      };
      setMessages((prev) => [...prev, botMsg]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-blue-700 transition"
      >
        💬
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-20 right-4 w-80 bg-white shadow-2xl rounded-2xl flex flex-col border border-gray-200">
          <div className="p-4 font-semibold text-white bg-blue-600 rounded-t-2xl">
            Hi {name}, I'm your Career Bot 👩‍💼
          </div>

          <div className="p-3 flex-1 overflow-y-auto h-64 bg-gray-50">
            {messages.length === 0 && (
              <div className="text-gray-400 text-sm text-center mt-10">
                Ask me about careers after Class 10!
              </div>
            )}
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`my-2 flex ${
                  msg.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`px-3 py-2 rounded-xl text-sm ${
                    msg.sender === 'user'
                      ? 'bg-blue-200 text-right'
                      : 'bg-gray-200 text-left'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="flex p-2 border-t bg-white">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about careers..."
              className="flex-1 border rounded-lg p-2 text-sm focus:outline-none focus:ring focus:ring-blue-200"
            />
            <button
              onClick={sendMessage}
              className="bg-blue-600 text-white px-3 ml-2 rounded-lg hover:bg-blue-700 transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}

