import { useCart } from "cart/CartContext";
import { Button } from "mfe-common-components";
import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();
  const { addItem } = useCart();

  // Mock product data (in a real app, this would come from an API)
  const product = {
    id: productId,
    name: `Product ${productId}`,
    price: 99.99,
    description:
      "This is a detailed description of the product. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    image: "https://cdn-icons-png.flaticon.com/512/3775/3775364.png",
  };

  const handleAddToCart = () => {
    addItem(product);
  };

  return (
    <div className="container">
      <div className="product-detail-grid">
        <div>
          <img src={product.image} alt={product.name} className="product-detail-image" />
        </div>

        <div className="product-detail-content">
          <h1 className="product-detail-title">{product.name}</h1>
          <p className="product-detail-price">${product.price}</p>
          <p className="product-detail-description">{product.description}</p>

          <div className="product-detail-actions">
            <Button variant="success" size="medium" onClick={handleAddToCart}>
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
