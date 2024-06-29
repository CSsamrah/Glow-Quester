import React, { useState } from 'react';
import './CheckoutForm.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { useCart } from '../Pages/CartContext'; // Adjust path as per your project structure
import Footer from '../FooterEnd/FooterEnd';

const CheckoutForm = ({ onClose }) => {
  const { cartItems } = useCart();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '', // New field for phone number
    address: '',
    city: '',
    zipCode: '',
    paymentMethod: 'COD', // Default payment method
  });
  const navigate = useNavigate(); // Get the navigate function from react-router-dom

  // Calculate total amount including delivery fee
  const calculateTotalAmount = () => {
    let subtotal = cartItems.reduce((total, item) => total + parseFloat(item.price.replace('$', '')) * item.quantity, 0);
    let deliveryFee = 200;
    return (subtotal + deliveryFee).toFixed(2);
  };

  // Calculate total quantity of items in cart
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
    // Simulate form submission (replace with actual API call when available)
    try {
      // Simulating API response delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Simulated success response
      const orderDetails = {
        ...formData,
        totalAmount: calculateTotalAmount(),
        items: cartItems, // Include items in the order details
      };

      // Redirect to order summary page
      navigate('/order-summary', { state: { orderDetails } });
    } catch (error) {
      console.error('Error processing order:', error);
      // Handle error scenario (display message, retry, etc.)
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
              <div key={item.title} className="cart_item">
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





