import React from 'react';

const Orders = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Gestión de Pedidos de Reparación</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-900 border-2 border-limegreen p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition duration-300 ease-in-out text-nightblack dark:text-white">
          <h2 className="text-2xl font-semibold mb-3">Crear Nuevo Pedido</h2>
          <p className="text-gray-700 dark:text-gray-300">Formulario para crear un nuevo pedido de reparación.</p>
        </div>
        <div className="bg-white dark:bg-gray-900 border-2 border-limegreen p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition duration-300 ease-in-out text-nightblack dark:text-white">
          <h2 className="text-2xl font-semibold mb-3">Lista de Pedidos</h2>
          <p className="text-gray-700 dark:text-gray-300">Ver todos los pedidos, cambiar estado, agregar observaciones, marcar como entregado.</p>
        </div>
      </div>
    </div>
  );
};

export default Orders;
