import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Clients from './pages/Clients';
import Orders from './pages/Orders';
import Technicians from './pages/Technicians';
import OrderStates from './pages/OrderStates';
import HistoryReports from './pages/HistoryReports';
import Dashboard from './components/Dashboard';
import Login from './pages/Login';
import ClientsRegister from './pages/ClientsRegister';
import OrdersCreate from './pages/OrdersCreate';

function App() {
  const [theme, setTheme] = useState('day');
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log('Theme changed to:', theme);
    if (theme === 'night') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'day' ? 'night' : 'day');
  };

  const handleLogin = (email) => {
    setUser(email);
  };

  const handleLogout = () => {
    setUser(null);
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <Router>
      <div className="min-h-screen flex bg-white dark:bg-nightblack text-limegreen transition-colors duration-500">
        <Sidebar theme={theme} toggleTheme={toggleTheme} onLogout={handleLogout} />
        <div className="flex flex-col flex-grow p-4 overflow-auto">
          <Dashboard />
          <main className="flex-grow mt-4">
            <Routes>
            <Route path="/" element={<Navigate to="/clients" replace />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/clients-register" element={<ClientsRegister />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/orders-create" element={<OrdersCreate />} />
            <Route path="/technicians" element={<Technicians />} />
            <Route path="/order-states" element={<OrderStates />} />
            <Route path="/history-reports" element={<HistoryReports />} />
          </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
