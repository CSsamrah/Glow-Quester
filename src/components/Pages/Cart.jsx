import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext'; // Adjust path as per your project structure
import './Cart.css';

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
                <div className="cart_product_price">{item.price}</div>
                <input
                  type="number"
                  value={item.quantity}
                  className="cart_product_quantity"
                  onChange={(e) =>
                    handleQuantityChange(item.title, parseInt(e.target.value))
                  }
                />
                <button
                  className="cart_remove"
                  onClick={() => removeCartItem(item.title)}
                >
                  Remove
                </button>
              </div>
              <div className="subtotal">
                <div className="sub_price">
                  ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                </div>
              </div>
            </div>
          ))}
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















