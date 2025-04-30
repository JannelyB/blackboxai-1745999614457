import React from 'react';

const Dashboard = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-limegreen-light dark:bg-limegreen-dark p-4 rounded shadow text-nightblack dark:text-white">
        <h2 className="text-lg font-semibold mb-2">Pedidos Registrados</h2>
        <p className="text-3xl font-bold">24</p>
      </div>
      <div className="bg-limegreen-light dark:bg-limegreen-dark p-4 rounded shadow text-nightblack dark:text-white">
        <h2 className="text-lg font-semibold mb-2">Pedidos en Reparación</h2>
        <p className="text-3xl font-bold">8</p>
      </div>
      <div className="bg-limegreen-light dark:bg-limegreen-dark p-4 rounded shadow text-nightblack dark:text-white">
        <h2 className="text-lg font-semibold mb-2">Pedidos Entregados</h2>
        <p className="text-3xl font-bold">15</p>
      </div>
    </section>
  );
};

export default Dashboard;
