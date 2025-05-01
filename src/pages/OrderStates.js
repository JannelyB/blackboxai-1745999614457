import React from 'react';

const OrderStates = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Estados del Pedido</h1>
      <div className="bg-white dark:bg-gray-900 border-2 border-limegreen p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition duration-300 ease-in-out text-nightblack dark:text-white">
        <h2 className="text-2xl font-semibold mb-3">Gestión de Estados</h2>
        <p className="text-gray-700 dark:text-gray-300">Visualizar y gestionar los estados de los pedidos: registrado, en reparación, reparado, entregado.</p>
      </div>
    </div>
  );
};

export default OrderStates;
