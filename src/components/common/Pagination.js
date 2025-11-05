import React from 'react';

const Pagination = ({ currentPage, maxPages, onPageChange }) => {
  const renderPagination = () => {
    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(maxPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    if (startPage > 1) {
      pages.push(
        <button
          key={1}
          className={`pagination-btn ${currentPage === 1 ? 'active' : ''}`}
          onClick={() => onPageChange(1)}
        >
          1
        </button>
      );
      if (startPage > 2) {
        pages.push(<span key="ellipsis1" className="pagination-ellipsis">...</span>);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          className={`pagination-btn ${currentPage === i ? 'active' : ''}`}
          onClick={() => onPageChange(i)}
        >
          {i}
        </button>
      );
    }

    if (endPage < maxPages) {
      if (endPage < maxPages - 1) {
        pages.push(<span key="ellipsis2" className="pagination-ellipsis">...</span>);
      }
      pages.push(
        <button
          key={maxPages}
          className={`pagination-btn ${currentPage === maxPages ? 'active' : ''}`}
          onClick={() => onPageChange(maxPages)}
        >
          {maxPages}
        </button>
      );
    }

    return pages;
  };

  if (maxPages <= 1) return null;

  return (
    <div className="pagination">
      <div className="pagination-info">
        Страница {currentPage} из {maxPages}
      </div>
      <div className="pagination-controls">
        <button
          className="pagination-nav"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          ← Назад
        </button>
        <div className="pagination-pages">
          {renderPagination()}
        </div>
        <button
          className="pagination-nav"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === maxPages}
        >
          Вперед →
        </button>
      </div>
    </div>
  );
};

export default Pagination;