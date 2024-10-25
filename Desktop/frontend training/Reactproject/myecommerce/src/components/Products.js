// src/components/Product.js
import React, { useState } from 'react';
import products from '../data'; // Importing products from data.js
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductModal from './ProductModal';
import Title from './title';
import { useCart } from '../CartContext';

function Product() {
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  return (
    <div className="container mt-4">
      <Title name="our" head="products" style={{ textTransform: 'uppercase' }} />
      
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100" onClick={() => handleShowModal(product)}>
              <img
                src={product.img}
                alt={product.title}
                className="card-img-top"
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'contain',
                  backgroundColor: '#f8f9fa'
                }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">${product.price}</p>
                <button className="btn btn-primary" >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Render the modal and pass the selected product data */}
      {selectedProduct && (
        <ProductModal
          show={showModal}
          onClose={handleCloseModal}
          product={selectedProduct}
          addToCart={addToCart}
        />
      )}
    </div>
  );
}

export default Product;
