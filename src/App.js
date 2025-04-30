import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Clients from './pages/Clients';
import Orders from './pages/Orders';
import Technicians from './pages/Technicians';
import OrderStates from './pages/OrderStates';
import HistoryReports from './pages/HistoryReports';

function App() {
  const [theme, setTheme] = useState('day');

  useEffect(() => {
    document.body.classList.remove('day', 'night');
    document.body.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'day' ? 'night' : 'day');
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main className="flex-grow p-4 bg-white dark:bg-black transition-colors duration-500">
          <Routes>
            <Route path="/" element={<Navigate to="/clients" replace />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/technicians" element={<Technicians />} />
            <Route path="/order-states" element={<OrderStates />} />
            <Route path="/history-reports" element={<HistoryReports />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
