import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './view/components/sidebar/Sidebar';
import DashboardPage from './view/pages/dashboard/dashboard';
import ProductsPage from './view/pages/products/productsPage';
import './App.scss'; 

const App = () => {
  return (
    <Router>
      <div className="app-layout">
        <Sidebar />
        <div className="app-content">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/products" element={<ProductsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
