import React, { useState, useEffect } from 'react';

export default function CustomerDetails() {
    const [customers, setCustomers] = useState([]);

    const fetchCustomers = async () => {
        try {
            const response = await fetch('https://glowquester-backend.vercel.app/skincare/customers');
            const data = await response.json();
            setCustomers(data);
        } catch (error) {
            console.error('Error fetching customers:', error);
        }
    };

    useEffect(() => {
        fetchCustomers();
    }, []);

    return (
        <div className="customer-table">
            <table width="100%">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Zip Code</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((customer) => (
                        <tr key={customer.customer_id}>
                            <td>{customer.customer_id}</td>
                            <td>{customer.username}</td>
                            <td>{customer.email}</td>
                            <td>{customer.phoneno}</td>
                            <td>{customer.address}</td>
                            <td>{customer.city}</td>
                            <td>{customer.zip_code}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
