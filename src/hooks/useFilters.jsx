import { createContext, useCallback, useContext, useState } from 'react';

const FilterContext = createContext(null);

const DEFAULT_FILTERS = {
    endYear: 'all',
    topic: 'all',
    sector: 'all',
    region: 'all',
    pestle: 'all',
    source: 'all',
    country: 'all',
};

export function FilterProvider({ children }) {
    const [filters, setFilters] = useState(DEFAULT_FILTERS);

    const updateFilter = useCallback((key, value) => {
        setFilters((prev) => ({ ...prev, [key]: value }));
    }, []);

    const resetFilters = useCallback(() => {
        setFilters(DEFAULT_FILTERS);
    }, []);

    const activeCount = Object.values(filters).filter((v) => v !== 'all').length;

    return (
        <FilterContext.Provider value={{ filters, updateFilter, resetFilters, activeCount }}>
            {children}
        </FilterContext.Provider>
    );
}

export const useFilters = () => useContext(FilterContext);
