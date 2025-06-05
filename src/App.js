import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
import ProductList from './components/ProductList';

const App = () => {
  return (
    <Routes>
      <Route index element={<ProductList />} />
      <Route path=":productId" element={<ProductDetails />} />
    </Routes>
  );
};

export default App; 