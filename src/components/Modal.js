import React from 'react';
import './Modal.css';  // Modal styles

const Modal = ({ isOpen, product, addToCart, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{product.title}</h2>
        <img src={product.img} alt={product.title} />
        <p>{product.info}</p>
        <div className="modal-buttons">
          <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
          <button className="back-btn" onClick={closeModal}>
            Back to Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
