import React, { useState } from 'react';
import './CheckoutForm.css';
import { useCart } from '../Pages/CartContext'; // Adjust path as per your project structure
import Footer from '../FooterEnd/FooterEnd';

const CheckoutForm = ({ onClose }) => {
  const { cartItems } = useCart();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    paymentMethod: 'COD', // Default payment method
    easyPaisaNumber: '', // New field for EasyPaisa payment method
  });

  // Calculate total amount including delivery fee
  const calculateTotalAmount = () => {
    let subtotal = cartItems.reduce((total, item) => total + parseFloat(item.price.replace('$', '')) * item.quantity, 0);
    let deliveryFee = 200;
    return (subtotal + deliveryFee).toFixed(2);
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
    // Simulate form submission for EasyPaisa (replace with actual API call when available)
    try {
      // Simulating API response delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Simulated success response
      const data = { status: 'success', message: 'Payment successful!' };
      console.log('EasyPaisa Payment Success:', data);

      // Reset form after successful payment or submission
      setFormData({
        fullName: '',
        email: '',
        address: '',
        city: '',
        zipCode: '',
        paymentMethod: 'COD', // Reset to default payment method
        easyPaisaNumber: '',
      });
      onClose(); // Close the form or perform other actions
    } catch (error) {
      console.error('Error processing payment:', error);
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

          <label htmlFor="paymentMethod">Payment Method</label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            required
          >
            <option value="COD">COD (Cash on Delivery)</option>
            <option value="EasyPaisa">EasyPaisa</option>
          </select>

          {/* Conditional rendering for EasyPaisa number field */}
          {formData.paymentMethod === 'EasyPaisa' && (
            <div>
              <label htmlFor="easyPaisaNumber">EasyPaisa Number</label>
              <input
                type="text"
                id="easyPaisaNumber"
                name="easyPaisaNumber"
                value={formData.easyPaisaNumber}
                onChange={handleChange}
                required
              />
            </div>
          )}

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


