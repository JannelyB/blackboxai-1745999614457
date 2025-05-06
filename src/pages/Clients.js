import React from 'react';

const Clients = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Gestión de Clientes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex flex-col items-center space-y-6">
        <button
          onClick={() => window.location.href = '/clients-register'}
          className="w-full max-w-xs bg-limegreen hover:bg-limegreen-dark text-white font-semibold py-4 rounded-2xl shadow-lg transition transform hover:scale-105"
        >
          Registrar Nuevo Cliente
        </button>
        <div className="bg-white dark:bg-gray-900 border-2 border-limegreen p-6 rounded-2xl shadow-lg w-full max-w-xs text-nightblack dark:text-white">
          <h2 className="text-2xl font-semibold mb-3">Pedidos del Cliente</h2>
          <p className="text-gray-700 dark:text-gray-300">Ver lista de pedidos y su estado para cada cliente.</p>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-900 border-2 border-limegreen p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition duration-300 ease-in-out text-nightblack dark:text-white">
        <h2 className="text-2xl font-semibold mb-3">Pedidos del Cliente</h2>
        <p className="text-gray-700 dark:text-gray-300">Ver lista de pedidos y su estado para cada cliente.</p>
      </div>
      </div>
    </div>
  );
};

export default Clients;
