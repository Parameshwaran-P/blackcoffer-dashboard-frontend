
import { useEffect, useState } from 'react';
import FiltersPanel from '../components/filters/FiltersPanel';
import { useFilters } from '../hooks/useFilters';
import {
    fetchFilters,
} from '../services/api';
import {
    mockFilters,
} from '../services/mockData';

// Utility to fetch with fallback to mock data
async function fetchWithFallback(apiFn, mockData, filters) {
    try {
        return await apiFn(filters);
    } catch {
        return mockData;
    }
}

export default function DashboardPage() {
    console.log("DashboardPage")
    const { filters } = useFilters();

    const [state, setState] = useState({
        kpi: null,
        intensity: null,
        topics: null,
        countries: null,
        yearly: null,
        scatter: null,
        filterOptions: null,
        loading: true,
        error: null,
    });

    const loadAll = async () => {
        setState((s) => ({ ...s, loading: true, error: null }));
        try {
            const [filterOptions] = await Promise.all([

                fetchWithFallback(fetchFilters, mockFilters, filters),
            ]);
            setState({ filterOptions, loading: false, error: null });
        } catch (err) {
            setState((s) => ({ ...s, loading: false, error: 'Failed to load dashboard data.' }));
        }
    };

    useEffect(() => {
        loadAll();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filters]);

    const { filterOptions } = state;



    return (
        <div className="p-5 lg:p-6 max-w-[1600px] mx-auto space-y-6">
            {/* Page header */}
            <div className="flex items-center justify-between fade-in fade-in-1">
                <div>
                    <h2 className="text-xl font-bold text-[var(--text-primary)]"
                        style={{ fontFamily: 'var(--font-display)' }}>
                        Overview
                    </h2>
                    <p className="text-sm text-[var(--text-muted)] mt-0.5">
                        Global insights analytics · Updated just now
                    </p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium"
                    style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)' }}>
                    <span className="w-2 h-2 rounded-full bg-[var(--accent-4)] animate-pulse" />
                    Live
                </div>
            </div>

            {/* Filters */}
            <div className="fade-in fade-in-2">
                <FiltersPanel filterOptions={filterOptions || mockFilters} />
            </div>
        </div>
    );
}
