import React from "react";
import { Route, Routes } from "react-router-dom";
import { ProductDetails, ProductList } from "../components";

const CatalogPage = () => {
  return (
    <Routes>
      <Route index element={<ProductList />} />
      <Route path=":productId" element={<ProductDetails />} />
    </Routes>
  );
};

export default CatalogPage;
