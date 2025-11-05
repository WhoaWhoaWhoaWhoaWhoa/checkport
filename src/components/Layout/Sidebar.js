import React from 'react';
import CompanyLogo from '../common/Icons/CompanyLogo';
import SidebarMenu from './SidebarMenu';

const Sidebar = ({ 
  filials, 
  selectedFilial, 
  onFilialChange, 
  activeMenu, 
  onMenuChange,
  loading = false 
}) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <div className="logo-container">
          <CompanyLogo />
        </div>
      </div>

      <div className="sidebar-section">
        <label htmlFor="filial" className="sidebar-label">Филиалы:</label>
        <select
          id="filial"
          value={selectedFilial}
          onChange={onFilialChange}
          disabled={loading}
          className="filial-select"
        >
          <option value="">Выберите филиал</option>
          {filials.map((filial) => (
            <option key={filial.id} value={filial.id}>
              {filial.name}
            </option>
          ))}
        </select>
      </div>

      <SidebarMenu activeMenu={activeMenu} onMenuChange={onMenuChange} />
    </aside>
  );
};

export default Sidebar;