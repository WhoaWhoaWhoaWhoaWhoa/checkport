import { useState, useEffect, useRef } from 'react';
import { apiService } from '../services/api';

export const useMenu = (selectedFilial) => {
  const [menuData, setMenuData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPages, setMaxPages] = useState(1);
  const [filters, setFilters] = useState({
    name: '',
    tt: '',
    active: ''
  });

  const filterTimeoutRef = useRef(null);

  const fetchMenu = async (page = 1) => {
    if (!selectedFilial) {
      setMenuData([]);
      return;
    }

    try {
      setLoading(true);
      setError('');
      
      const params = {
        page: page.toString(),
        ...(filters.name && { name: filters.name }),
        ...(filters.tt && { tt: filters.tt }),
        ...(filters.active && { active: filters.active })
      };

      const data = await apiService.getMenu(selectedFilial, params);
      
      setMenuData(data?.data || []);
      setMaxPages(data?.max_pages || 1);
      setCurrentPage(page);
    } catch (err) {
      console.error('Error fetching menu:', err);
      setMenuData([]);
      setMaxPages(1);
      
      if (!err.message.includes('JSON') && !err.message.includes('404')) {
        setError(`Ошибка загрузки данных: ${err.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  // Автоматическое применение фильтров с задержкой
  useEffect(() => {
    if (selectedFilial) {
      if (filterTimeoutRef.current) {
        clearTimeout(filterTimeoutRef.current);
      }
      
      filterTimeoutRef.current = setTimeout(() => {
        fetchMenu(1);
      }, 300);
    }

    return () => {
      if (filterTimeoutRef.current) {
        clearTimeout(filterTimeoutRef.current);
      }
    };
  }, [filters, selectedFilial]);

  useEffect(() => {
    if (selectedFilial) {
      fetchMenu(1);
    } else {
      setMenuData([]);
    }
  }, [selectedFilial]);

  const updateFilters = (newFilters) => {
    setFilters(newFilters);
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= maxPages) {
      fetchMenu(page);
    }
  };

  return {
    menuData,
    loading,
    error,
    currentPage,
    maxPages,
    filters,
    updateFilters,
    handlePageChange,
    refreshMenu: fetchMenu
  };
};