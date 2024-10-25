import React from 'react';
import { useCart } from '../CartContext';

function Cart() {
  const { cart } = useCart();

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>
      <div className="row">
        {cart.length > 0 ? (
          cart.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card h-100">
                <img src={product.img} alt={product.title} className="card-img-top" style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'contain',  
                  backgroundColor: '#f8f9fa'
                }} />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">${product.price}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No items in the cart.</p>
        )}
      </div>
    </div>
  );
}

export default Cart;
