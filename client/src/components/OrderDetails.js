import React, { useState, useEffect } from 'react';
import '../components/Pages/AdminPage.css';

const OrderDetails = () => {
    const [orders, setOrders] = useState([]);
    const [searchOrderID, setSearchOrderID] = useState('');
    const [selectedOrder, setSelectedOrder] = useState(null);

    // Fetch all orders
    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const response = await fetch('/orderDetails');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setOrders(data);
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    };

    // Fetch order by order_id
    const searchOrder = async () => {
        try {
            const response = await fetch(`/orderDetails/${searchOrderID}`);
            if (response.status === 404) {
                setSelectedOrder(null);
                throw new Error('Order not found');
            }
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setSelectedOrder(data);
        } catch (error) {
            console.error('Error fetching order:', error);
        }
    };

    return (
        <div className="order-details-container">
            <h3>Order Details</h3>

            {/* Search Order Form */}
            <div className="search-order">
                <input
                    type="text"
                    placeholder="Enter Order ID"
                    value={searchOrderID}
                    onChange={(e) => setSearchOrderID(e.target.value)}
                />
                <button onClick={searchOrder}>Search</button>
            </div>

            {/* Order Table */}
            <div className="order-table">
                <table>
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Product ID</th>
                            <th>username</th>
                            <th>Total Amount</th>
                            <th>Total Quantity</th>
                            <th>Email</th>
                            <th>Phoneno</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>Payment Method</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => (
                            <tr key={order.order_id}>
                                <td>{order.order_id}</td>
                                <td>{order.product_id}</td>
                                <td>{order.username}</td>
                                <td>{order.total_amount}</td>
                                <td>{order.total_quantity}</td>
                                <td>{order.email}</td>
                                <td>{order.phoneno}</td>
                                <td>{order.address}</td>
                                <td>{order.city}</td>
                                <td>{order.payment_method}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Selected Order Details */}
            {selectedOrder && (
                <div className="selected-order-details">
                    <h4>Selected Order Details</h4>
                    <p>Order ID: {selectedOrder.order_id}</p>
                    <p>UserName: {selectedOrder.username}</p>
                    <p>Product ID: {selectedOrder.product_id}</p>
                    <p>Total_quantity: {selectedOrder.total_quantity}</p>
                    <p>Total_amount: {selectedOrder.total_amount}</p>
                    <p>Email: {selectedOrder.email}</p>
                    <p>Phone No: {selectedOrder.phoneno}</p>
                    <p>City: {selectedOrder.city}</p>
                    <p>Address: {selectedOrder.address}</p>
                    <p>Payment Method: {selectedOrder.payment_method}</p>
                   
                </div>
            )}
        </div>
    );
};

export default OrderDetails;
