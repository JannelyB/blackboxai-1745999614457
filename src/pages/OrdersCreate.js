import React from 'react';

const OrdersCreate = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-nightblack p-4">
      <form
        className="bg-white dark:bg-gray-900 border-2 border-limegreen p-8 rounded-2xl shadow-lg w-full max-w-md"
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const data = {
            clientName: formData.get('clientName'),
            device: formData.get('device'),
            issue: formData.get('issue'),
          };
          console.log('Nuevo pedido creado:', data);
          alert('Pedido creado: ' + JSON.stringify(data));
          e.target.reset();
        }}
      >
        <h1 className="text-3xl font-bold mb-6 text-limegreen">Crear Nuevo Pedido</h1>
        <input
          type="text"
          name="clientName"
          placeholder="Nombre del Cliente"
          required
          className="w-full p-2 mb-4 border border-gray-300 dark:border-gray-700 rounded"
        />
        <input
          type="text"
          name="device"
          placeholder="Dispositivo"
          required
          className="w-full p-2 mb-4 border border-gray-300 dark:border-gray-700 rounded"
        />
        <textarea
          name="issue"
          placeholder="Descripción del problema"
          required
          className="w-full p-2 mb-6 border border-gray-300 dark:border-gray-700 rounded resize-none"
          rows="4"
        />
        <button
          type="submit"
          className="w-full bg-limegreen hover:bg-limegreen-dark text-white font-semibold py-2 rounded transition"
        >
          Crear Pedido
        </button>
      </form>
    </div>
  );
};

export default OrdersCreate;
