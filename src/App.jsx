import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout';
import { FilterProvider } from './hooks/useFilters';
import DashboardPage from './pages/DashboardPage';
import './App.css'

function App() {

  return (
    <>
      <FilterProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path='/dashboard' index element={<DashboardPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </FilterProvider>
    </>
  )
}

export default App;
