// Mock cart context for standalone mode
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = product => {
    console.log("[STANDALONE MODE] Adding to cart:", product);
    setCart(prev => [...prev, { ...product, id: Date.now() }]);
  };

  const removeFromCart = productId => {
    console.log("[STANDALONE MODE] Removing from cart:", productId);
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const value = {
    cart,
    addToCart,
    removeFromCart,
    cartCount: cart.length,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    // Return a mock if no provider (for development)
    return {
      cart: [],
      addToCart: product => console.log("[STANDALONE MODE] Mock addToCart:", product),
      removeFromCart: id => console.log("[STANDALONE MODE] Mock removeFromCart:", id),
      cartCount: 0,
    };
  }
  return context;
};

// For default export compatibility
export default {
  useCart,
  CartProvider,
};
