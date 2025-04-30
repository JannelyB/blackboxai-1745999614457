import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ theme, toggleTheme }) => {
  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-limegreen font-semibold border-b-2 border-limegreen'
      : 'text-gray-600 hover:text-limegreen';

  return (
    <nav className="bg-white dark:bg-nightblack shadow-md p-4 flex justify-between items-center">
      <div className="text-limegreen font-bold text-xl">Cell Repair</div>
      <ul className="flex space-x-6">
        <li>
          <NavLink to="/clients" className={linkClass}>
            Clientes
          </NavLink>
        </li>
        <li>
          <NavLink to="/orders" className={linkClass}>
            Pedidos
          </NavLink>
        </li>
        <li>
          <NavLink to="/technicians" className={linkClass}>
            Técnicos
          </NavLink>
        </li>
        <li>
          <NavLink to="/order-states" className={linkClass}>
            Estados
          </NavLink>
        </li>
        <li>
          <NavLink to="/history-reports" className={linkClass}>
            Historial
          </NavLink>
        </li>
      </ul>
      <button
        onClick={toggleTheme}
        className="text-limegreen hover:text-limegreen-dark focus:outline-none"
        aria-label="Toggle theme"
      >
        {theme === 'day' ? (
          <i className="fas fa-moon fa-lg"></i>
        ) : (
          <i className="fas fa-sun fa-lg"></i>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
