// src/components/ProductModal.js
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function ProductModal({ show, onClose, product, addToCart }) {
  if (!product) return null;

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{product.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={product.img} alt={product.title} className="img-fluid mb-3" />
        <p><strong>Price:</strong> ${product.price}</p>
        <p><strong>Description:</strong> {product.info}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Back to Shopping
        </Button>
        <Button variant="primary" onClick={() => addToCart(product.id)}>
          {product.inCart ? 'In Cart' : 'Add to Cart'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProductModal;
