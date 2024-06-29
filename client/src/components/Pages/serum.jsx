import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext'; // Adjust path as per your project structure
import './Catalog.css';
import SlidingCart from './SlidingCart'; // Import SlidingCart component

// Import images
import img1 from '../images/serum1.png';
import img2 from '../images/serum2.png'; 
import img3 from '../images/serum3.png'; 
import img4 from '../images/serum4.png';
import addCart from '../images/AddToCart.png';


const Serum = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [isSlidingCartOpen, setSlidingCartOpen] = useState(false);

  const products = [
    {
      title: 'Glow Recipe: Watermelon Glow Niacinamide Dew Drops',
      price: '3500',
      image: img1
    },
    {
      title: 'ValJean Labs: Hydrate Facial Serum',
      price: '1200',
      image: img2
    },
    {
      title: 'Anua: Peach 70 Niacin Serum',
      price: '2200',
      image: img3
    },
    {
      title: 'PIXI Skintreats: Hydrating Milky Serum',
      price: '2500',
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
                <div className="pro_image">
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
                    <img src={addCart} alt={product.title} />
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

export default Serum;