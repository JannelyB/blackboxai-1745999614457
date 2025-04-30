import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ theme, toggleTheme }) => {
  const linkClass = ({ isActive }) =>
    isActive
      ? 'bg-limegreen text-white font-semibold rounded px-3 py-2 block'
      : 'text-limegreen hover:bg-limegreen hover:text-white rounded px-3 py-2 block';

  return (
    <aside className="w-64 min-h-screen bg-white dark:bg-nightblack shadow-lg flex flex-col">
      <div className="p-6 text-2xl font-bold text-limegreen border-b border-limegreen">
        Cell Repair
      </div>
      <nav className="flex-grow p-4 space-y-2">
        <NavLink to="/clients" className={linkClass}>
          <i className="fas fa-users mr-2"></i> Clientes
        </NavLink>
        <NavLink to="/orders" className={linkClass}>
          <i className="fas fa-tools mr-2"></i> Pedidos
        </NavLink>
        <NavLink to="/technicians" className={linkClass}>
          <i className="fas fa-user-cog mr-2"></i> Técnicos
        </NavLink>
        <NavLink to="/order-states" className={linkClass}>
          <i className="fas fa-tasks mr-2"></i> Estados
        </NavLink>
        <NavLink to="/history-reports" className={linkClass}>
          <i className="fas fa-file-alt mr-2"></i> Historial
        </NavLink>
      </nav>
      <div className="p-4 border-t border-limegreen">
        <button
          onClick={toggleTheme}
          className="w-full bg-limegreen text-white rounded py-2 flex items-center justify-center hover:bg-limegreen-dark transition"
          aria-label="Toggle theme"
        >
          {theme === 'day' ? (
            <>
              <i className="fas fa-moon mr-2"></i> Modo Nocturno
            </>
          ) : (
            <>
              <i className="fas fa-sun mr-2"></i> Modo Día
            </>
          )}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
