import React from "react";
import { Link } from "react-router-dom";

const mockProducts = [
  { id: 1, name: "Product 1", price: 99.99, category: "Electronics", description: "A high-quality electronic device" },
  { id: 2, name: "Product 2", price: 149.99, category: "Electronics", description: "Another amazing electronic product" },
  { id: 3, name: "Product 3", price: 79.99, category: "Clothing", description: "Comfortable and stylish clothing" },
  { id: 4, name: "Product 4", price: 199.99, category: "Home", description: "Essential home item" },
];

const ProductList = () => {
  return (
    <div className="container">
      <div className="catalog-header">
        <h1 className="catalog-title">Product Catalog</h1>
        <p className="catalog-subtitle">Discover our amazing collection of products</p>
      </div>

      <div className="product-grid">
        {mockProducts.map(product => (
          <Link key={product.id} to={`${product.id}`} className="no-underline">
            <div className="card">
              <img src="https://cdn-icons-png.flaticon.com/512/3775/3775364.png" alt={product.name} className="card-image" />
              <h3 className="product-card-title">{product.name}</h3>
              <p className="product-card-category">{product.category}</p>
              <p className="product-card-price">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
