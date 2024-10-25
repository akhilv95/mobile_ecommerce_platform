import React, { createContext, useState, useContext } from 'react';
import myproducts from './data';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (productId) => {
    const product = myproducts.find((p) => p.id === productId);
    setCart((prevCart) => {
      if (!prevCart.some((item) => item.id === productId)) {
        return [...prevCart, product];
      }
      return prevCart;
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart,clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
