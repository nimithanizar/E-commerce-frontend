
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.scss';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Admin Dashboard</h2>
      <nav>
        <ul>
          <li>
            <NavLink to="/" activeClassName="active-link" exact>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" activeClassName="active-link">
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
