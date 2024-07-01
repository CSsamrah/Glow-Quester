import React, { useState } from 'react';
import './CheckoutForm.css';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../Pages/CartContext';
import Footer from '../FooterEnd/FooterEnd';

const CheckoutForm = ({ onClose }) => {
  const { cartItems } = useCart();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    address: '',
    city: '',
    zipCode: '',
    paymentMethod: 'COD',
  });
  const navigate = useNavigate();

  const calculateTotalAmount = () => {
    let subtotal = cartItems.reduce((total, item) => total + parseFloat(item.price.replace('$', '')) * item.quantity, 0);
    let deliveryFee = 200;
    return (subtotal + deliveryFee).toFixed(2);
  };

  const calculateTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Simulated API response delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      const orderDetails = {
        ...formData,
        totalAmount: calculateTotalAmount(),
        items: cartItems.map(item => ({
          productId: item.id, // Include product ID
          name: item.title,
          quantity: item.quantity,
        })),
      };

      navigate('/order-summary', { state: { orderDetails } });
    } catch (error) {
      console.error('Error processing order:', error);
    }
  };

  return (
    <div className="body">
      <br /><br /><br /><br /><br />
      <div className="checkout_form_container">
        <h2>Checkout</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />

          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />

          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />

          <label htmlFor="zipCode">Zip Code</label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            required
          />

          {/* Display items in cart */}
          <label>Items in Cart</label>
          <div className="cart_items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart_item">
                <div>{item.title}</div>
                <div>Quantity: {item.quantity}</div>
              </div>
            ))}
          </div>

          {/* Display total amount including delivery fee */}
          <div className="total_amount">
            <h3>Total Amount: ${calculateTotalAmount()}</h3>
          </div>

          <div className="button_group">
            <button type="submit">Place Order</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default CheckoutForm;
