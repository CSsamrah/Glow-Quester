import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext'; // Adjust path as per your project structure
import './Catalog.css';
import SlidingCart from './SlidingCart'; // Import SlidingCart component

// Import images
import img1 from '../images/cleanser1.png';
import img2 from '../images/cleanser2.png';
import img3 from '../images/cleanser3.png';
import img4 from '../images/moisturizer1.png';
import img5 from '../images/moisturizer2.png';
import img6 from '../images/moisturizer3.png';
import img7 from '../images/moisturizer4.png';
import img8 from '../images/serum1.png';
import img9 from '../images/serum2.png';
import img10 from '../images/serum3.png';
import img11 from '../images/serum4.png';
import img12 from '../images/sunscreen1.png';
import img13 from '../images/sunscreen2.png';
import img14 from '../images/sunscreen3.png';
import img15 from '../images/sunscreen4.png';
import addCart from '../images/AddToCart.png';

const Catalog = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [isSlidingCartOpen, setSlidingCartOpen] = useState(false);

  const products = [
    {
      id: 'p1',
      title: 'GlossyBox Skincare: Deep Cleansing Cream',
      price: '1500',
      image: img1
    },
    {
      id: 'p2',
      title: 'Glow Recipe: Blueberry Bounce Gentle Cleanser',
      price: '2200',
      image: img2
    },
    {
      id: 'p3',
      title: 'Anua: Heartleaf Pore Control Cleansing Oil',
      price: '2800',
      image: img3
    },
    {
      id: 'p4',
      title: 'COSRX: Oil-Free Ultra-Moisturizing Lotion (with Birch Sap)',
      price: '1800',
      image: img4
    },
    {
      id: 'p5',
      title: 'Summer Fridays: Cloud Dew Oil-Free Gel Cream',
      price: '3000',
      image: img5
    },
    {
      id: 'p6',
      title: 'Summer Fridays: Rich Cushion Cream, Ultra-Plumping ',
      price: '3500',
      image: img6
    },
    {
      id: 'p7',
      title: 'Glow Recipe: Watermelon Glow Pink Juice Moisturizer',
      price: '2800',
      image: img7
    },
    {
      id: 'p8',
      title: 'Glow Recipe: Watermelon Glow Niacinamide Dew Drops',
      price: '3500',
      image: img8
    },
    {
      id: 'p9',
      title: 'ValJean Labs: Hydrate Facial Serum',
      price: '1200',
      image: img9
    },
    {
      id: 'p10',
      title: 'Anua: Peach 70 Niacin Serum',
      price: '2200',
      image: img10
    },
    {
      id: 'p11',
      title: 'PIXI Skintreats: Hydrating Milky Serum',
      price: '2500',
      image: img11
    },
    {
      id: 'p12',
      title: 'MISSHA Soft Finish Sun Milk',
      price: '1700',
      image: img12
    },
    {
      id: 'p13',
      title: 'SALT & SOFT: Natural Mineral Sunscreen Lotion',
      price: '2000',
      image: img13
    },
    {
      id: 'p14',
      title: 'The Ordinary Sunscreen',
      price: '1800',
      image: img14
    },
    {
      id: 'p15',
      title: 'Tatcha: The Silk Sunscreen',
      price: '6500',
      image: img15
    }
  ];

  const addProductToCart = (product) => {
    addToCart(product);
    setSlidingCartOpen(true); // Open sliding cart after adding product
  };

  const navigateToProductDetail = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <main>
      <div className="catalog">
        <div className="catalog_container">
          <div className="products">
            {products.map((product) => (
              <div className="product_card" key={product.id}>
                <div className="pro_image" onClick={() => navigateToProductDetail(product.id)}>
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="product_features" onClick={() => navigateToProductDetail(product.id)}>
                  <p>{product.title}</p>
                </div>
                <div className="price">
                  <b>Rs.{product.price}</b>
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

export default Catalog;
