import React, { useContext } from 'react';
import { CartContext } from '../CartContext';  // Import CartContext

const Cart = () => {
  const { cartItems } = useContext(CartContext); // Access cartItems from context

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.title} - Quantity: {item.count} - Price: ${item.price * item.count}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
