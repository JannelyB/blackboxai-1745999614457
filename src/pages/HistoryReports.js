import React from 'react';

const HistoryReports = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Historial y Reportes</h1>
      <div className="bg-white dark:bg-gray-900 border-2 border-limegreen p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition duration-300 ease-in-out text-nightblack dark:text-white">
        <h2 className="text-2xl font-semibold mb-3">Historial por Cliente</h2>
        <p className="text-gray-700 dark:text-gray-300">Ver historial por cliente y descargar reporte de pedidos.</p>
      </div>
    </div>
  );
};

export default HistoryReports;
