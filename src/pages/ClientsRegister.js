import React from 'react';

const ClientsRegister = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-nightblack p-4">
      <form
        className="bg-white dark:bg-gray-900 border-2 border-limegreen p-8 rounded-2xl shadow-lg w-full max-w-md"
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
      >
        <h1 className="text-3xl font-bold mb-6 text-limegreen">Registrar Nuevo Cliente</h1>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          required
          className="w-full p-2 mb-4 border border-gray-300 dark:border-gray-700 rounded"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Número de teléfono"
          required
          className="w-full p-2 mb-4 border border-gray-300 dark:border-gray-700 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full p-2 mb-6 border border-gray-300 dark:border-gray-700 rounded"
        />
        <button
          type="submit"
          className="w-full bg-limegreen hover:bg-limegreen-dark text-white font-semibold py-2 rounded transition"
        >
          Registrar
        </button>
      </form>
    </div>
  );
};

export default ClientsRegister;
