import { Filter, RotateCcw } from 'lucide-react';
import { useFilters } from '../../hooks/useFilters';

function FilterSelect({ label, filterKey, options = [] }) {
    const { filters, updateFilter } = useFilters();

    return (
        <div className="flex flex-col gap-1">
            <label className="text-[10px] font-semibold uppercase tracking-widest text-[var(--text-muted)]">
                {label}
            </label>
            <div className="relative">
                <select
                    value={filters[filterKey]}
                    onChange={(e) => updateFilter(filterKey, e.target.value)}
                    className="
            w-full appearance-none text-sm
            bg-[var(--bg-elevated)] text-[var(--text-primary)]
            border border-[var(--border)] rounded-xl
            px-3 py-2 pr-8 outline-none
            hover:border-[var(--accent)] focus:border-[var(--accent)]
            transition-colors cursor-pointer
          "
                    style={{ fontFamily: 'var(--font-body)' }}
                >
                    <option value="all">All</option>
                    {options.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                    ))}
                </select>
                <div className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2">
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                        <path d="M1 1l4 4 4-4" stroke="var(--text-muted)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default function FiltersPanel({ filterOptions = {} }) {
    const { resetFilters, activeCount } = useFilters();

    const FILTER_CONFIG = [
        { label: 'End Year', key: 'endYear', options: filterOptions.endYears || [] },
        { label: 'Topic', key: 'topic', options: filterOptions.topics || [] },
        { label: 'Sector', key: 'sector', options: filterOptions.sectors || [] },
        { label: 'Region', key: 'region', options: filterOptions.regions || [] },
        { label: 'PESTLE', key: 'pestle', options: filterOptions.pestles || [] },
        { label: 'Source', key: 'source', options: filterOptions.sources || [] },
        { label: 'Country', key: 'country', options: filterOptions.countries || [] },
    ];

    return (
        <div className="glass-card p-5">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <Filter size={15} className="text-[var(--accent)]" />
                    <span className="text-sm font-semibold text-[var(--text-primary)]"
                        style={{ fontFamily: 'var(--font-display)' }}>
                        Filters
                    </span>
                    {activeCount > 0 && (
                        <span
                            className="text-[10px] font-bold px-1.5 py-0.5 rounded-full text-white"
                            style={{ background: 'var(--accent)' }}
                        >
                            {activeCount}
                        </span>
                    )}
                </div>
                {activeCount > 0 && (
                    <button
                        onClick={resetFilters}
                        className="flex items-center gap-1 text-xs text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
                    >
                        <RotateCcw size={12} /> Reset
                    </button>
                )}
            </div>

            {/* Filter grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3">
                {FILTER_CONFIG.map((f) => (
                    <FilterSelect key={f.key} label={f.label} filterKey={f.key} options={f.options} />
                ))}
            </div>
        </div>
    );
}
