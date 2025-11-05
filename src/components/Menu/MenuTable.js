import React from 'react';
import Loading from '../common/Loading';
import Error from '../common/Error';
import Pagination from '../common/Pagination';
import TableFilters from './TableFilters';
import TableRow from './TableRow';

const MenuTable = ({ 
  data, 
  loading, 
  error, 
  currentPage, 
  maxPages, 
  filters, 
  onFilterChange, 
  onPageChange,
  onRetry 
}) => {
  if (loading) return <Loading />;
  if (error) return <Error message={error} onRetry={onRetry} />;

  return (
    <div className="table-panel">
      <div className="table-container">
        <table className="data-table">
          <thead>
            <TableFilters filters={filters} onFilterChange={onFilterChange} />
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item) => (
                <TableRow key={item.id} item={item} />
              ))
            ) : (
              <tr>
                <td colSpan="5" className="no-data-cell">
                  <div className="no-data-in-table">
                    <div className="no-data-icon">📊</div>
                    <div className="no-data-text">Данные не найдены</div>
                    <div className="no-data-hint">Попробуйте изменить параметры фильтрации</div>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {maxPages > 1 && data.length > 0 && (
        <Pagination
          currentPage={currentPage}
          maxPages={maxPages}
          onPageChange={onPageChange}
        />
      )}
    </div>
  );
};

export default MenuTable;