import { useState, useMemo } from 'react';

export const useSearch = (items, searchKeys = ['title']) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = useMemo(() => {
    if (!searchTerm.trim()) return items;

    const lowercasedTerm = searchTerm.toLowerCase();

    return items.filter(item => {
      return searchKeys.some(key => {
        const value = item[key];
        if (typeof value === 'string') {
          return value.toLowerCase().includes(lowercasedTerm);
        }
        if (Array.isArray(value)) {
          return value.some(val => 
            typeof val === 'string' && val.toLowerCase().includes(lowercasedTerm)
          );
        }
        return false;
      });
    });
  }, [items, searchTerm, searchKeys]);

  return {
    searchTerm,
    setSearchTerm,
    filteredItems
  };
};
