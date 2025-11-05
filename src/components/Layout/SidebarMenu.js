import React from 'react';
import { MENU_ITEMS } from '../../utils/constants';

const SidebarMenu = ({ activeMenu, onMenuChange }) => {
  return (
    <nav className="sidebar-menu">
      {MENU_ITEMS.map((item, index) => (
        <button
          key={index}
          className={`menu-item ${activeMenu === item ? 'active' : ''}`}
          onClick={() => onMenuChange(item)}
        >
          {item}
        </button>
      ))}
    </nav>
  );
};

export default SidebarMenu;