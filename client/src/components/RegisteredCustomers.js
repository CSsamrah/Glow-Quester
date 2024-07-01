import React, { useState, useEffect } from 'react';
import '../components/Pages/AdminPage.css';

const RegisteredCustomers = () => {
    const [customers, setCustomers] = useState([]);
    const [searchCustomerID, setSearchCustomerID] = useState('');
    const [selectedCustomer, setSelectedCustomer] = useState(null);

    // Fetch all customers
    useEffect(() => {
        fetchCustomers();
    }, []);

    const fetchCustomers = async () => {
        try {
            const response = await fetch('/registered-customers');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log('Fetched customers:', data); // Debug log
            setCustomers(data);
        } catch (error) {
            console.error('Error fetching customers:', error);
        }
    };

    // Fetch customer by customer_id
    const searchCustomer = async () => {
        try {
            const response = await fetch(`/registered-customers/${searchCustomerID}`);
            if (response.status === 404) {
                setSelectedCustomer(null);
                throw new Error('Customer not found');
            }
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log('Fetched customer:', data); // Debug log
            setSelectedCustomer(data);
        } catch (error) {
            console.error('Error fetching customer:', error);
        }
    };

    return (
        <div className="customer-details-container">
            <h3>Registered Customers</h3>

            {/* Search Customer Form */}
            <div className="search-customer">
                <input
                    type="text"
                    placeholder="Enter Customer ID"
                    value={searchCustomerID}
                    onChange={(e) => setSearchCustomerID(e.target.value)}
                />
                <button onClick={searchCustomer}>Search</button>
            </div>

            {/* Customer Table */}
            <div className="customer-table">
                <table>
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone No</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map(customer => (
                            <tr key={customer.user_id}>
                                <td>{customer.user_id}</td>
                                <td>{customer.username}</td>
                                <td>{customer.email}</td>
                                <td>{customer.phoneno}</td>
                                <td>{customer.password}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Selected Customer Details */}
            {selectedCustomer && (
                <div className="selected-customer-details">
                    <h4>Selected Customer Details</h4>
                    <p>Customer ID: {selectedCustomer.user_id}</p>
                    <p>Username: {selectedCustomer.username}</p>
                    <p>Email: {selectedCustomer.email}</p>
                    <p>Phone No: {selectedCustomer.phoneno}</p>
                    <p>Address: {selectedCustomer.password}</p>
                </div>
            )}
        </div>
    );
};

export default RegisteredCustomers;
