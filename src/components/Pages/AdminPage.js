import React, { useState } from 'react';
import CustomerDetails from '../CustomerDetails';
import ProductDetails from '../ProductDetails';
import './AdminPage.css';

export default function Admin() {
    const [showCustomers, setShowCustomers] = useState(false);
    const [showProducts, setShowProducts] = useState(false);

    const handleShowCustomers = () => {
        setShowCustomers(true);
        setShowProducts(false);
    };

    const handleShowProducts = () => {
        setShowCustomers(false);
        setShowProducts(true);
    };

    return (
        <div className="admin-container">
            <h3 className="i_name">Dashboard</h3>
            <button onClick={handleShowCustomers}>Registered Customers</button>
            <button onClick={handleShowProducts}>Product Details</button>

            {showCustomers && <CustomerDetails />}
            {showProducts && <ProductDetails />}
        </div>
    );
}
