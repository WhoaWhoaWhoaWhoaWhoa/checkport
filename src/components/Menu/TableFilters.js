import React from 'react';

const TableFilters = ({ filters, onFilterChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFilterChange({
      ...filters,
      [name]: value
    });
  };

  return (
    <tr className="filter-row">
      <th>
        <div className="column-filter">
          <input
            type="text"
            name="name"
            placeholder="Название меню"
            value={filters.name}
            onChange={handleChange}
            className="filter-input"
          />
        </div>
      </th>
      <th>
        <div className="column-filter">
          <input
            type="text"
            name="tt"
            placeholder="Торговая точка"
            value={filters.tt}
            onChange={handleChange}
            className="filter-input"
          />
        </div>
      </th>
      <th>
        <div className="column-filter">
          <select
            name="active"
            value={filters.active}
            onChange={handleChange}
            className="filter-select"
          >
            <option value="">Все статусы</option>
            <option value="active">Активно</option>
            <option value="no_active">Не активно</option>
          </select>
        </div>
      </th>
      <th>
        <div className="column-filter">
          <span className="column-name">Экспорт</span>
        </div>
      </th>
      <th>
        <div className="column-filter">
          <span className="column-name">Действия</span>
        </div>
      </th>
    </tr>
  );
};

export default TableFilters;