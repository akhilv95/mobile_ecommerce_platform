import React, { useState } from 'react';
import Modal from './Modal';
import './ProductList.css';

const ProductList = ({ products, addToCart }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="product-list">
      {products.map(product => (
        <div className="product" key={product.id} onClick={() => openModal(product)}>
          <h2>{product.title}</h2>
          <img src={product.img} alt={product.title} />
          <button onClick={() => openModal(product)}>View Details</button>
        </div>
      ))}

      {/* Modal component */}
      <Modal
        isOpen={isModalOpen}
        product={selectedProduct}
        addToCart={addToCart}
        closeModal={closeModal}
      />
    </div>
  );
};

export default ProductList;
