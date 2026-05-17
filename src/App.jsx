import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout';
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<AppLayout />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
