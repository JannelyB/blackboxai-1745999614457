import React from 'react';

const Orders = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Gestión de Pedidos de Reparación</h1>
      <div className="flex flex-col items-center space-y-6">
        <button
          onClick={() => window.location.href = '/orders-create'}
          className="w-full max-w-xs bg-limegreen hover:bg-limegreen-dark text-white font-semibold py-4 rounded-2xl shadow-lg transition transform hover:scale-105"
        >
          Crear Nuevo Pedido
        </button>
        <div className="bg-white dark:bg-gray-900 border-2 border-limegreen p-6 rounded-2xl shadow-lg w-full max-w-xs text-nightblack dark:text-white">
          <h2 className="text-2xl font-semibold mb-3">Lista de Pedidos</h2>
          <p className="text-gray-700 dark:text-gray-300">Ver todos los pedidos, cambiar estado, agregar observaciones, marcar como entregado.</p>
        </div>
      </div>
    </div>
  );
};

export default Orders;
