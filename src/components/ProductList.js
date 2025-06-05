import React from 'react';
import { Link } from 'react-router-dom';

const mockProducts = [
  { id: 1, name: 'Product 1', price: 99.99, category: 'Electronics', description: 'A high-quality electronic device' },
  { id: 2, name: 'Product 2', price: 149.99, category: 'Electronics', description: 'Another amazing electronic product' },
  { id: 3, name: 'Product 3', price: 79.99, category: 'Clothing', description: 'Comfortable and stylish clothing' },
  { id: 4, name: 'Product 4', price: 199.99, category: 'Home', description: 'Essential home item' },
];

const ProductList = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>Product Catalog</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '2rem',
        padding: '1rem 0'
      }}>
        {mockProducts.map(product => (
          <Link
            key={product.id}
            to={`${product.id}`}
            style={{
              textDecoration: 'none',
              color: 'inherit'
            }}
          >
            <div style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '1rem',
              transition: 'transform 0.2s',
              ':hover': {
                transform: 'translateY(-5px)'
              }
            }}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/3775/3775364.png"
                alt={product.name}
                style={{
                  width: '100%',
                  borderRadius: '4px',
                  marginBottom: '1rem'
                }}
              />
              <h3 style={{ margin: '0 0 0.5rem 0' }}>{product.name}</h3>
              <p style={{ margin: '0 0 0.5rem 0', color: '#666' }}>{product.category}</p>
              <p style={{ margin: '0', fontWeight: 'bold', color: '#28a745' }}>${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList; 