import React from 'react';

const Clients = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Gestión de Clientes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white dark:bg-gray-900 border-2 border-limegreen p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition duration-300 ease-in-out text-nightblack dark:text-white">
        <h2 className="text-2xl font-semibold mb-3">Registrar Nuevo Cliente</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const data = {
              name: formData.get('name'),
              phone: formData.get('phone'),
              email: formData.get('email'),
            };
            console.log('Nuevo cliente registrado:', data);
            alert('Cliente registrado: ' + JSON.stringify(data));
            e.target.reset();
          }}
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            required
            className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Número de teléfono"
            required
            className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded"
          />
          <button
            type="submit"
            className="bg-limegreen hover:bg-limegreen-dark text-white font-semibold py-2 px-4 rounded transition"
          >
            Registrar
          </button>
        </form>
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
