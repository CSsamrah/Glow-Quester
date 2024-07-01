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
            setSelectedOrder(data.length > 0 ? data[0] : null);
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
            <div className="table-wrapper">
                <div className="order-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Customer ID</th>
                                <th>Product Name</th>
                                <th>Username</th>
                                <th>Total Amount</th>
                                <th>Total Quantity</th>
                                <th>Email</th>
                                <th>Phone No</th>
                                <th>Address</th>
                                <th>City</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map(order => (
                                <tr key={order.order_id}>
                                    <td>{order.order_id}</td>
                                    <td>{order.customer_id}</td>
                                    <td>{order.product_name}</td>
                                    <td>{order.username}</td>
                                    <td>{order.total_amount}</td>
                                    <td>{order.total_quantity}</td>
                                    <td>{order.email}</td>
                                    <td>{order.phoneno}</td>
                                    <td>{order.address}</td>
                                    <td>{order.city}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Selected Order Details */}
            {selectedOrder && (
                <div className="selected-order-details">
                    <h4>Selected Order Details</h4>
                    <p>Order ID: {selectedOrder.order_id}</p>
                    <p>Customer ID: {selectedOrder.customer_id}</p>
                    <p>Product Name: {selectedOrder.product_name}</p>
                    <p>Username: {selectedOrder.username}</p>
                    <p>Total Amount: {selectedOrder.total_amount}</p>
                    <p>Total Quantity: {selectedOrder.total_quantity}</p>
                    <p>Email: {selectedOrder.email}</p>
                    <p>Phone No: {selectedOrder.phoneno}</p>
                    <p>Address: {selectedOrder.address}</p>
                    <p>City: {selectedOrder.city}</p>
                </div>
            )}
        </div>
    );
};

export default OrderDetails;
