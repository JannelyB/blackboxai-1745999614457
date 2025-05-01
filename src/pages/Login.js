import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just simulate login success if email and password are non-empty
    if (email && password) {
      onLogin(email);
    } else {
      alert('Por favor, ingrese email y contraseña.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-nightblack">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-900 border-2 border-limegreen p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h1 className="text-3xl font-bold mb-6 text-limegreen">Iniciar Sesión</h1>
        <label className="block mb-4">
          <span className="text-gray-700 dark:text-gray-300">Email</span>
          <input
            type="email"
            className="mt-1 block w-full rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-nightblack dark:text-white p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label className="block mb-6">
          <span className="text-gray-700 dark:text-gray-300">Contraseña</span>
          <input
            type="password"
            className="mt-1 block w-full rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-nightblack dark:text-white p-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button
          type="submit"
          className="w-full bg-limegreen hover:bg-limegreen-dark text-white font-semibold py-2 rounded transition"
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
