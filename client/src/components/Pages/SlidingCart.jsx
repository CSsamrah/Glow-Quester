import React from 'react';
import { useCart } from './CartContext'; // Adjust path as per your project structure
import './SlidingCart.css'; // Assuming you'll have separate styles for sliding cart
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';



const SlidingCart = ({ isOpen, onClose, onViewFullCart }) => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const removeCartItem = (title) => {
    removeFromCart(title);
  };

  const handleQuantityChange = (title, quantity) => {
    updateQuantity(title, quantity);
  };

  return (
    <div className={`sliding_cart ${isOpen ? 'open' : ''}`}>
      <div className="sliding_cart_header">
        <h2>Cart</h2>
        <button className="close_sliding_cart" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
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
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        ))}
      </div>
      <div className="sliding_cart_footer">
        <button className="view_full_cart_button" onClick={onViewFullCart}>
          View full cart
        </button>
      </div>
    </div>
  );
};

export default SlidingCart;


