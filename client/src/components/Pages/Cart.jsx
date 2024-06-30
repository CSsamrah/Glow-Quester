import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext'; // Adjust path as per your project structure
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const removeCartItem = (title) => {
    removeFromCart(title);
  };

  const handleQuantityChange = (title, quantity) => {
    updateQuantity(title, quantity);
  };

  const handleCheckout = () => {
    // Navigate to checkout form page
    navigate('/checkout');
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + parseFloat(item.price.replace('Rs.', '')) * item.quantity;
    }, 0).toFixed(2);
  };

  return (
    <main>
      <div className="cart_page">
        <div className="cart_header">
          <div className="header_product">Product</div>
          <div className="header_quantity">Quantity</div>
          <div className="header_subtotal">Subtotal</div>
        </div>
        <div className="cart_info">
          {cartItems.map((item) => (
            <div className="cart_box" key={item.title}>
              <div className="detail_box">
                <div className="cart_product_title">{item.title}</div>
                <div className="cart_product_price"><p>Rs.{item.price}</p></div>
                <button
                  className="cart_remove"
                  onClick={() => removeCartItem(item.title)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
                </div>
                <div className='quantity_box'>
                  <input
                    type="number"
                    min={1}
                    value={item.quantity}
                    className="cart_product_quantity"
                    onChange={(e) =>
                      handleQuantityChange(item.title, parseInt(e.target.value))
                    }
                  />
              </div>
              <div className="subtotal">
                <div className="sub_price">
                  Rs.{(parseFloat(item.price.replace('Rs.', '')) * item.quantity).toFixed(2)}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="total_section">
          <div className="total_label">Total:</div>
          <div className="total_price">Rs.{calculateTotal()}</div>
        </div>
        <div className="checkout_section">
          <button className="checkout_button" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </div>
    </main>
  );
};

export default Cart;
















