import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext'; // Adjust path as per your project structure
import './Catalog.css';
import SlidingCart from './SlidingCart'; // Import SlidingCart component

// Import images
import img1 from '../images/moisturizer1.png';
import img2 from '../images/moisturizer2.png'; // Replace with actual path
import img3 from '../images/moisturizer3.png'; // Replace with actual path
import img4 from '../images/moisturizer4.png';

const Moisturizer = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [isSlidingCartOpen, setSlidingCartOpen] = useState(false);

  const products = [
    {
      title: 'COSRX: Oil-Free Ultra-Moisturizing Lotion (with Birch Sap)',
      price: 'Rs.1800',
      image: img1
    },
    {
      title: 'Summer Fridays: Cloud Dew Oil-Free Gel Cream',
      price: 'Rs.3000',
      image: img2
    },
    {
      title: 'Summer Fridays: Rich Cushion Cream, Ultra-Plumping ',
      price: 'Rs.3500',
      image: img3
    },
    {
      title: 'Glow Recipe: Watermelon Glow Pink Juice Moisturizer',
      price: 'Rs.2800',
      image: img4
    }
  ];

  const addProductToCart = (product) => {
    addToCart(product);
    setSlidingCartOpen(true); // Open sliding cart after adding product
  };

  return (
    <main>
      <div className="catalog">
        <div className="catalog_container">
          <div className="products">
            {products.map((product, index) => (
              <div className="product_card" key={index}>
                <div className="product_image">
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="product_features">
                  <p>{product.title}</p>
                </div>
                <div className="price">
                  <b>{product.price}</b>
                </div>
                <div className="button">
                  <button
                    className="add_to_cart_button"
                    onClick={() => addProductToCart(product)}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Sliding Cart Component */}
      <SlidingCart
        isOpen={isSlidingCartOpen}
        onClose={() => setSlidingCartOpen(false)}
        onViewFullCart={() => navigate('/cart')}
      />
    </main>
  );
};

export default Moisturizer;