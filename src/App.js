import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Routes >
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard/>} />
      </Route>
    </Routes>
  );
}

export default App;
