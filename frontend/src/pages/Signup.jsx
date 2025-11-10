import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Signup() {
  const [name, setName] = useState('');
  const [userClass, setUserClass] = useState('');
  const [interests, setInterests] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://chatbot-sux9.onrender.com/api/auth/signup', {
        name,
        class: userClass,
        interests: interests.split(',').map(i => i.trim())
      });
      navigate('/landing', { state: { name } });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-2xl mb-4 font-bold">Student Signup</h2>
        <input className="border p-2 w-full mb-3" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
        <input className="border p-2 w-full mb-3" placeholder="Class" value={userClass} onChange={e => setUserClass(e.target.value)} />
        <input className="border p-2 w-full mb-3" placeholder="Interests (comma separated)" value={interests} onChange={e => setInterests(e.target.value)} />
        <button className="bg-blue-500 text-white p-2 w-full rounded">Signup</button>
      </form>
    </div>
  );
}
