import React, { useState, useEffect } from 'react';
import '../components/Pages/AdminPage.css';

const ShipmentDetails = () => {
    const [shipments, setShipments] = useState([]);
    const [searchShippingID, setSearchShippingID] = useState('');
    const [selectedShipment, setSelectedShipment] = useState(null);

    // Fetch all shipments
    useEffect(() => {
        fetchShipments();
    }, []);

    const fetchShipments = async () => {
        try {
            const response = await fetch('https://glowquester-backend.vercel.app/skincare/shipment');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setShipments(data);
        } catch (error) {
            console.error('Error fetching shipments:', error);
        }
    };

    // Fetch shipment by shipping_id
    const searchShipment = async () => {
        try {
            const response = await fetch(`https://glowquester-backend.vercel.app/skincare/shipment/${searchShippingID}`);
            if (response.status === 404) {
                setSelectedShipment(null);
                throw new Error('Shipment not found');
            }
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setSelectedShipment(data);
        } catch (error) {
            console.error('Error fetching shipment:', error);
        }
    };

    return (
        <div className="shipment-details-container">
            <h3>Shipment Details</h3>

            {/* Search Shipment Form */}
            <div className="search-shipment">
                <input
                    type="text"
                    placeholder="Enter Shipping ID"
                    value={searchShippingID}
                    onChange={(e) => setSearchShippingID(e.target.value)}
                />
                <button onClick={searchShipment}>Search</button>
            </div>

            {/* Shipment Table */}
            <div className="shipment-table">
                <table>
                    <thead>
                        <tr>
                            <th>Shipping ID</th>
                            <th>Order ID</th>
                            <th>Shipping Address</th>
                            <th>Shipment Date</th>
                            <th>Delivery Date</th>
                            <th>Tracking Number</th>
                            {/* Add more columns as per your shipment schema */}
                        </tr>
                    </thead>
                    <tbody>
                        {shipments.map(shipment => (
                            <tr key={shipment.shipping_id}>
                                <td>{shipment.shipping_id}</td>
                                <td>{shipment.order_id}</td>
                                <td>{shipment.shipping_address}</td>
                                <td>{shipment.shipment_date}</td>
                                <td>{shipment.delivery_date}</td>
                                <td>{shipment.tracking_number}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Selected Shipment Details */}
            {selectedShipment && (
                <div className="selected-shipment-details">
                    <h4>Selected Shipment Details</h4>
                    <p>Shipping ID: {selectedShipment.shipping_id}</p>
                    <p>Order ID: {selectedShipment.order_id}</p>
                    <p>Address: {selectedShipment.shipping_address}</p>
                    <p>Shipping Date: {selectedShipment.shipment_date}</p>
                    <p>Delivery Date: {selectedShipment.delivery_date}</p>
                    <p>tracking_number: {selectedShipment.tracking_number}</p>  
                </div>
            )}
        </div>
    );
};

export default ShipmentDetails;
