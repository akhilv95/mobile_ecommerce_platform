import React from 'react';
import { useCart } from '../CartContext';
import Title from './title';
function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleBuy = () => {
    alert(`Thank you for your purchase! Total: $${totalPrice.toFixed(2)}`);
    clearCart(); // Clear the cart after purchase
  };

  return (
    <div className="container mt-4">
      <Title name="your" head="cart" style={{ textTransform: 'uppercase' }} />
      <div className="row">
        {cart.length > 0 ? (
          cart.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card h-100">
                <img src={product.img} alt={product.title} className="card-img-top" style={{ height: '150px', objectFit: 'cover' }} />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">${product.price}</p>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeFromCart(product.id)}
                  >
                    Remove from Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className='btn btn-center'>Your cart is empty.</p>
        )}
      </div>

      {cart.length > 0 && (
        <div className="mt-4">
          <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
          <button className="btn btn-success mt-2" onClick={handleBuy}>
            Buy Now
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
