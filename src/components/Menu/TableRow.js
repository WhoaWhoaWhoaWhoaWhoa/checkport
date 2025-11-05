import React from 'react';
import DiagramIcon from '../common/Icons/DiagramIcon';
import PencilIcon from '../common/Icons/PencilIcon';
import TrashIcon from '../common/Icons/TrashIcon';

const TableRow = ({ item }) => {
  return (
    <tr key={item.id}>
      <td className="menu-name">
        <div className="menu-name-content">
          {item.name || '—'}
        </div>
      </td>
      <td className="tt-name">
        <div className="tt-name-content">
          {item.tt?.name || '—'}
        </div>
      </td>
      <td className="status-cell">
        <span className={`status ${item.active ? 'active' : 'inactive'}`}>
          {item.active ? 'Активно' : 'Не активно'}
        </span>
      </td>
      <td className="export-list">
        <div className="export-list-content">
          {item.export?.join(', ') || '—'}
        </div>
      </td>
      <td className="actions">
        <button className="btn-diagram" title="Диаграмма">
          <DiagramIcon />
          <span className="sr-only">Диаграмма</span>
        </button>
        <button className="btn-pencil" title="Карандаш">
          <PencilIcon />
          <span className="sr-only">Карандаш</span>
        </button>
        <button className="btn-trash" title="Корзина">
          <TrashIcon />
          <span className="sr-only">Корзина</span>
        </button>
      </td>
    </tr>
  );
};

export default TableRow;