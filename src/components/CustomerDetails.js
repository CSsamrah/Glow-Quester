import React, { useState, useEffect } from 'react';

export default function CustomerDetails() {
    const [customers, setCustomers] = useState([]);

    const fetchCustomers = async () => {
        try {
            const response = await fetch('/customers');
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
                    </tr>
                </thead>
                <tbody>
                    {customers.map((customer) => (
                        <tr key={customer.user_id}>
                            <td>{customer.user_id}</td>
                            <td>{customer.username}</td>
                            <td>{customer.email}</td>
                            <td>{customer.phoneno}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
