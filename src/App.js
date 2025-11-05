import React, { useState } from 'react';
import { useFilials } from './hooks/useFilials';
import { useMenu } from './hooks/useMenu';
import Sidebar from './components/Layout/Sidebar';
import MenuTable from './components/Menu/MenuTable';
import './styles/globals.css';

const App = () => {
  const [activeMenu, setActiveMenu] = useState('Меню');
  const [selectedFilial, setSelectedFilial] = useState('');
  
  const { filials, loading: filialsLoading } = useFilials();
  const {
    menuData,
    loading: menuLoading,
    error,
    currentPage,
    maxPages,
    filters,
    updateFilters,
    handlePageChange,
    refreshMenu
  } = useMenu(selectedFilial);

  const handleFilialChange = (e) => {
    setSelectedFilial(e.target.value);
  };

  const renderContent = () => {
    if (activeMenu !== 'Меню') {
      return (
        <div className="placeholder">
          <div className="placeholder-icon">🚧</div>
          <h3>Раздел в разработке</h3>
          <p>Раздел "{activeMenu}" находится в стадии разработки</p>
        </div>
      );
    }

    return (
      <MenuTable
        data={menuData}
        loading={menuLoading}
        error={error}
        currentPage={currentPage}
        maxPages={maxPages}
        filters={filters}
        onFilterChange={updateFilters}
        onPageChange={handlePageChange}
        onRetry={() => refreshMenu(currentPage)}
      />
    );
  };

  return (
    <div className="app">
      <div className="main-layout">
        <Sidebar
          filials={filials}
          selectedFilial={selectedFilial}
          onFilialChange={handleFilialChange}
          activeMenu={activeMenu}
          onMenuChange={setActiveMenu}
          loading={filialsLoading}
        />

        <main className="content">
          <div className="content-section">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;