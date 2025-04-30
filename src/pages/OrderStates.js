import React from 'react';

const OrderStates = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Estados del Pedido</h1>
      <div className="bg-limegreen-light dark:bg-limegreen-dark p-6 rounded shadow text-nightblack dark:text-white">
        <h2 className="text-xl font-semibold mb-2">Gestión de Estados</h2>
        <p>Visualizar y gestionar los estados de los pedidos: registrado, en reparación, reparado, entregado.</p>
      </div>
    </div>
  );
};

export default OrderStates;
