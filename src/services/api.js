import axios from 'axios';
import { API_BASE } from '../constants';

const api = axios.create({
    baseURL: API_BASE,
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' },
});

// Request interceptor
api.interceptors.request.use(
    (config) => config,
    (error) => Promise.reject(error)
);

// Response interceptor
api.interceptors.response.use(
    (response) => response.data,
    (error) => {
        console.error('[API Error]', error?.response?.data || error.message);
        return Promise.reject(error);
    }
);

/**
 * Build query string from active filters
 */
const buildParams = (filters = {}) => {
    const params = {};
    Object.entries(filters).forEach(([k, v]) => {
        if (v && v !== 'all') params[k] = v;
    });
    return params;
};

// ─── API Functions ─────────────────────────────────────────

export const fetchFilters = () => api.get('/filters');

export const fetchDashboard = (filters) =>
    api.get('/dashboard', { params: buildParams(filters) });

export const fetchKPI = (filters) =>
    api.get('/kpi', { params: buildParams(filters) });

export const fetchIntensityChart = (filters) =>
    api.get('/charts/intensity', { params: buildParams(filters) });

export const fetchTopicsChart = (filters) =>
    api.get('/charts/topics', { params: buildParams(filters) });

export const fetchCountriesChart = (filters) =>
    api.get('/charts/countries', { params: buildParams(filters) });

export const fetchYearlyChart = (filters) =>
    api.get('/charts/yearly', { params: buildParams(filters) });

export const fetchScatterChart = (filters) =>
    api.get('/charts/scatter', { params: buildParams(filters) });

export default api;
