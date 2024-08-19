import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './OrderSummary.css';
import { v4 as uuidv4 } from 'uuid'; // Import UUID package

const OrderSummary = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { orderDetails } = location.state || {};
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [shipmentDetails, setShipmentDetails] = useState(null);

    // function generateOrderId() {
    //     const timestamp = new Date().getTime(); // Current timestamp in milliseconds
    //     const uuid = uuidv4(); // Generate a unique UUID
    //     return 'OR' + timestamp + '-' + uuid; // Combine timestamp and UUID to ensure uniqueness
    // }

    if (!orderDetails) {
        return <p>No order details available.</p>;
    }

    const handleConfirmOrder = async () => {
        setLoading(true);
        setError(null);

        // const order_id = generateOrderId();
        const payload = {
            username: orderDetails.fullName,
            phoneno: orderDetails.phoneNumber,
            products: orderDetails.items.map(item => ({
                name: item.name, 
                quantity: item.quantity,
                productId: item.productId,
            })),
            total_amount: orderDetails.totalAmount,
            email: orderDetails.email,
            address: orderDetails.address,
            city: orderDetails.city,
            zip_code: orderDetails.zipCode,
            // order_id: order_id
        };

        try {
            const response = await fetch('https://glowquester-backend.vercel.app/skincare/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error('Failed to confirm order');
            }

            const data = await response.json();
            setShipmentDetails(data.shipment);
            alert('Order confirmed successfully!');
        } catch (err) {
            console.error('Error confirming order:', err);
            setError('An error occurred while confirming the order.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='body'>
            <br />
            <br />
            <br />
            <div className="order_summary_container">
                <br />
                <br />
                <br />
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
                            <li key={item.productId}>
                                {item.name} - Quantity: {item.quantity}
                            </li>
                        ))}
                    </ul>
                </div>
{/* 
      <div className="order_summary_total">
        <p><strong>Total Amount:</strong> ${orderDetails.totalAmount}</p>
      </div> */}

                <button className="confirm_order_button" onClick={handleConfirmOrder} disabled={loading}>
                    Confirm Order
                </button>
                {error && <p>{error}</p>}

                {shipmentDetails && (
                    <div className="shipment_details">
                        <h3>Shipment Details</h3>
                        <p><strong>Shipping ID:</strong> {shipmentDetails.shipping_id}</p>
                        <p><strong>Shipment Date:</strong> {shipmentDetails.shipment_date}</p>
                        <p><strong>Delivery Date:</strong> {shipmentDetails.delivery_date}</p>
                        <p><strong>Tracking Number:</strong> {shipmentDetails.tracking_number}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default OrderSummary;
