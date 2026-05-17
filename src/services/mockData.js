export const mockKPI = {
    totalRecords: 1000,
    avgIntensity: 6.42,
    avgRelevance: 3.87,
    avgLikelihood: 2.94,
    trends: {
        totalRecords: +12.4,
        avgIntensity: +3.2,
        avgRelevance: -1.1,
        avgLikelihood: +5.7,
    },
};

export const mockIntensity = [
    { sector: 'Energy', intensity: 7.8 },
    { sector: 'Environment', intensity: 6.5 },
    { sector: 'Government', intensity: 5.9 },
    { sector: 'Aerospace', intensity: 8.2 },
    { sector: 'Manufacturing', intensity: 5.4 },
    { sector: 'Financial', intensity: 7.1 },
    { sector: 'Healthcare', intensity: 6.8 },
    { sector: 'Technology', intensity: 9.1 },
];

export const mockTopics = [
    { topic: 'oil', count: 120 },
    { topic: 'gas', count: 95 },
    { topic: 'market', count: 88 },
    { topic: 'climate', count: 74 },
    { topic: 'energy', count: 112 },
    { topic: 'policy', count: 65 },
    { topic: 'economy', count: 83 },
    { topic: 'war', count: 54 },
];

export const mockCountries = [
    { country: 'United States', count: 285 },
    { country: 'China', count: 198 },
    { country: 'Russia', count: 143 },
    { country: 'India', count: 127 },
    { country: 'United Kingdom', count: 96 },
    { country: 'Germany', count: 72 },
    { country: 'Brazil', count: 58 },
    { country: 'France', count: 54 },
];

export const mockYearly = [
    { year: 2016, intensity: 5.1, relevance: 3.2, likelihood: 2.4 },
    { year: 2017, intensity: 5.8, relevance: 3.5, likelihood: 2.6 },
    { year: 2018, intensity: 6.3, relevance: 3.7, likelihood: 2.8 },
    { year: 2019, intensity: 7.0, relevance: 3.9, likelihood: 3.0 },
    { year: 2020, intensity: 6.6, relevance: 3.8, likelihood: 2.9 },
    { year: 2021, intensity: 7.4, relevance: 4.1, likelihood: 3.2 },
    { year: 2022, intensity: 8.1, relevance: 4.3, likelihood: 3.5 },
];

export const mockScatter = Array.from({ length: 80 }, (_, i) => ({
    relevance: Math.round(Math.random() * 5 * 10) / 10,
    likelihood: Math.round(Math.random() * 5 * 10) / 10,
    intensity: Math.round(Math.random() * 10 * 10) / 10,
    sector: ['Energy', 'Environment', 'Government', 'Technology'][Math.floor(Math.random() * 4)],
}));

export const mockFilters = {
    endYears: ['2016', '2017', '2018', '2019', '2020', '2021', '2022'],
    topics: ['oil', 'gas', 'market', 'climate', 'energy', 'policy', 'economy', 'war'],
    sectors: ['Energy', 'Environment', 'Government', 'Aerospace', 'Manufacturing', 'Financial', 'Healthcare', 'Technology'],
    regions: ['Northern America', 'Central America', 'Southern Asia', 'Eastern Europe', 'Western Europe', 'Eastern Asia'],
    pestles: ['Industries', 'Economic', 'Political', 'Technological', 'Environmental', 'Social'],
    sources: ['EIA', 'Reuters', 'Vox', 'The Guardian', 'OPEC', 'Bloomberg'],
    countries: ['United States', 'China', 'Russia', 'India', 'United Kingdom', 'Germany', 'Brazil', 'France'],
};
