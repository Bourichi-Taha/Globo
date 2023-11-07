import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import DataProtection from './pages/DataProtection';
import Home from './pages/Home';

function App() {
  return (
    <Routes >
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard/>} />
        <Route path='/data-protection' element={<DataProtection/>} />
        <Route path='/home' element={<Home/>} />

      </Route>
    </Routes>
  );
}

export default App;
