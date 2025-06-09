import { useCart } from "cart/CartContext";
import { Button } from "common-components-react";
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
    description: "This is a detailed description of the product.",
    image: "https://cdn-icons-png.flaticon.com/512/3775/3775364.png",
  };

  const handleAddToCart = () => {
    addItem(product);
  };

  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem",
        }}
      >
        <div>
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: "100%",
              borderRadius: "8px",
            }}
          />
        </div>

        <div>
          <h1>{product.name}</h1>
          <p
            style={{
              fontSize: "1.5rem",
              color: "#333",
              margin: "1rem 0",
            }}
          >
            ${product.price}
          </p>
          <p
            style={{
              color: "#666",
              marginBottom: "2rem",
            }}
          >
            {product.description}
          </p>

          <Button variant="success" size="medium" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
