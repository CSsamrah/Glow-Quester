import React from 'react';
import { useCart } from './CartContext'; // Adjust path as per your project structure
import './SlidingCart.css'; // Assuming you'll have separate styles for sliding cart

const SlidingCart = ({ isOpen, onClose, onViewFullCart }) => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const removeCartItem = (title) => {
    removeFromCart(title);
  };

  const handleQuantityChange = (title, quantity) => {
    updateQuantity(title, quantity);
  };

  return (
    <div className='body'>
    <div className={`sliding_cart ${isOpen ? 'open' : ''}`}>
    <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="sliding_cart_header">
        <h2>Sliding Cart</h2>
        <button className="close_sliding_cart" onClick={onClose}>
          Close
        </button>
      </div>
      <div className="sliding_cart_items">
        {cartItems.map((item) => (
          <div className="sliding_cart_item" key={item.title}>
            <div className="sliding_cart_item_title">{item.title}</div>
            <div className="sliding_cart_item_price">{item.price}</div>
            <input
              type="number"
              value={item.quantity}
              className="sliding_cart_item_quantity"
              onChange={(e) =>
                handleQuantityChange(item.title, parseInt(e.target.value))
              }
            />
            <button
              className="sliding_cart_remove"
              onClick={() => removeCartItem(item.title)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="sliding_cart_footer">
        <button className="view_full_cart_button" onClick={onViewFullCart}>
          View Full Cart
        </button>
      </div>
    </div>
    </div>
  );
};

export default SlidingCart;


