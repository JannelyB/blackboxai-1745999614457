import React from 'react';

const Clients = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Gestión de Clientes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-limegreen-light dark:bg-limegreen-dark p-6 rounded shadow text-nightblack dark:text-white">
          <h2 className="text-xl font-semibold mb-2">Registrar Nuevo Cliente</h2>
          <p>Formulario para agregar un nuevo cliente con nombre, número y email.</p>
        </div>
        <div className="bg-limegreen-light dark:bg-limegreen-dark p-6 rounded shadow text-nightblack dark:text-white">
          <h2 className="text-xl font-semibold mb-2">Pedidos del Cliente</h2>
          <p>Ver lista de pedidos y su estado para cada cliente.</p>
        </div>
      </div>
    </div>
  );
};

export default Clients;
