import React, { useState } from 'react';
import CustomerDetails from '../CustomerDetails';
import ProductDetails from '../ProductDetails';
import OrderDetails from '../OrderDetails';
import ShipmentDetails from '../ShipmentDetails'; // Import the new ShipmentDetails component
import './AdminPage.css';

export default function Admin() {
    const [showCustomers, setShowCustomers] = useState(false);
    const [showProducts, setShowProducts] = useState(false);
    const [showOrders, setShowOrders] = useState(false);
    const [showShipments, setShowShipments] = useState(false); // State to toggle ShipmentDetails visibility

    const handleShowCustomers = () => {
        setShowCustomers(true);
        setShowProducts(false);
        setShowOrders(false);
        setShowShipments(false);
    };

    const handleShowProducts = () => {
        setShowCustomers(false);
        setShowProducts(true);
        setShowOrders(false);
        setShowShipments(false);
    };

    const handleShowOrders = () => {
        setShowCustomers(false);
        setShowProducts(false);
        setShowOrders(true);
        setShowShipments(false);
    };

    const handleShowShipments = () => {
        setShowCustomers(false);
        setShowProducts(false);
        setShowOrders(false);
        setShowShipments(true);
    };

    return (
        <div className="admin-container">
            <h3 className="i_name">Dashboard</h3>
            <button onClick={handleShowCustomers}>Registered Customers</button>
            <button onClick={handleShowProducts}>Product Details</button>
            <button onClick={handleShowOrders}>Order Details</button>
            <button onClick={handleShowShipments}>Shipment Details</button> {/* New button for Shipment Details */}

            {showCustomers && <CustomerDetails />}
            {showProducts && <ProductDetails />}
            {showOrders && <OrderDetails />}
            {showShipments && <ShipmentDetails />} {/* Render ShipmentDetails component based on state */}
        </div>
    );
}
