import React, { useContext } from 'react';
import { CartContext } from '../CartContext';  // Import CartContext

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext); // Access the addToCart function

  return (
    <div className="product">
      <h2>{product.title}</h2>
      <p>Price: ${product.price}</p>
      <p>{product.info}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button> {/* Add to Cart */}
    </div>
  );
};

export default Product;
