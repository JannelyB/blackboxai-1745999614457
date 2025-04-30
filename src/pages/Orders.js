import React from 'react';

const Orders = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Gestión de Pedidos de Reparación</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-limegreen-light dark:bg-limegreen-dark p-6 rounded shadow text-nightblack dark:text-white">
          <h2 className="text-xl font-semibold mb-2">Crear Nuevo Pedido</h2>
          <p>Formulario para crear un nuevo pedido de reparación.</p>
        </div>
        <div className="bg-limegreen-light dark:bg-limegreen-dark p-6 rounded shadow text-nightblack dark:text-white">
          <h2 className="text-xl font-semibold mb-2">Lista de Pedidos</h2>
          <p>Ver todos los pedidos, cambiar estado, agregar observaciones, marcar como entregado.</p>
        </div>
      </div>
    </div>
  );
};

export default Orders;
