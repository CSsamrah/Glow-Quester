import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './OrderSummary.css'; // Import the CSS file for styling

const OrderSummary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { orderDetails } = location.state || {};

  if (!orderDetails) {
    return <p>No order details available.</p>;
  }

  const handleConfirmOrder = () => {
    // Logic to handle order confirmation (e.g., send to backend, update database, etc.)
    // For demonstration, simply navigate back to the home page after confirmation
    alert('Order confirmed successfully!');
    navigate('/');
  };

  return (
    <div className='body'>
        <br></br>
        <br></br>
        <br></br>
    <div className="order_summary_container">
        <br></br>
        <br></br>
        <br></br>
      <h2>Order Summary</h2>
      <div className="order_summary_details">
        <p><strong>Full Name:</strong> {orderDetails.fullName}</p>
        <p><strong>Email:</strong> {orderDetails.email}</p>
        <p><strong>Phone Number:</strong> {orderDetails.phoneNumber}</p>
        <p><strong>Address:</strong> {orderDetails.address}</p>
        <p><strong>City:</strong> {orderDetails.city}</p>
        <p><strong>Zip Code:</strong> {orderDetails.zipCode}</p>

        <h3>Items Ordered:</h3>
        <ul>
          {orderDetails.items.map((item) => (
            <li key={item.title}>
              {item.title} - Quantity: {item.quantity}
            </li>
          ))}
        </ul>
      </div>

      <div className="order_summary_total">
        <p><strong>Total Amount:</strong> ${orderDetails.totalAmount}</p>
      </div>

      <button className="confirm_order_button" onClick={handleConfirmOrder}>
        Confirm Order
      </button>
    </div>
    </div>
  );
};

export default OrderSummary;


