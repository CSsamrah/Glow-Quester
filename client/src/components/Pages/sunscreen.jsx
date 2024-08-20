import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext'; // Adjust path as per your project structure
import './Catalog.css';
import SlidingCart from './SlidingCart'; // Import SlidingCart component

// Import images
import img1 from '../images/sunscreen1.png';
import img2 from '../images/sunscreen2.png'; 
import img3 from '../images/sunscreen3.png'; 
import img4 from '../images/sunscreen4.png';
import addCart from '../images/AddToCart.png';


const Sunscreen = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [isSlidingCartOpen, setSlidingCartOpen] = useState(false);

  const navigateToProductDetail = (productId) => {
    navigate(`/product/${productId}`);
  };


  const products = [
    // { id:'p12',
    //   title: 'MISSHA Soft Finish Sun Milk',
    //   price: '1700',
    //   image: img1
    // },
    {id:'p13',
      title: 'SALT & SOFT: Natural Mineral Sunscreen Lotion',
      price: '2000',
      image: img2
    },
    { id:'p14',
      title: 'The Ordinary Sunscreen',
      price: '1800',
      image: img3
    },
    { id:'p15',
      title: 'Tatcha: The Silk Sunscreen',
      price: '6500',
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
            {products.map((product) => (
              <div className="product_card" key={product.id}>
                <div className="pro_image" onClick={() => navigateToProductDetail(product.id)}>
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="product_features" onClick={() => navigateToProductDetail(product.id)}>
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

export default Sunscreen;