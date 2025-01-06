import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OrderSummary = () => {
    const navigate = useNavigate();
    const [currentOrder, setCurrentOrder] = useState(null);
    const [orderHistory, setOrderHistory] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null); // For the selected item

    useEffect(() => {
        // Retrieve the current order from localStorage
        const savedCurrentOrder = JSON.parse(localStorage.getItem('orderSummary'));
        const savedOrderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];

        setCurrentOrder(savedCurrentOrder);
        setOrderHistory(savedOrderHistory);
    }, []);

    const saveOrderToHistory = () => {
        if (currentOrder) {
            const updatedHistory = [...orderHistory, currentOrder];
            setOrderHistory(updatedHistory);
            localStorage.setItem('orderHistory', JSON.stringify(updatedHistory));
            localStorage.removeItem('orderSummary');
            setCurrentOrder(null);
        }
    };

    const downloadOrderData = () => {
        const allOrders = [...orderHistory];
        if (currentOrder) {
            allOrders.push(currentOrder);
        }

        const orderData = allOrders.map((order, index) => {
            return `Order ${index + 1}:\n` +
                `Order Date: ${order.orderDate}\n` +
                `Expected Delivery Date: ${order.expectedDeliveryDate}\n` +
                `Payment Method: ${order.paymentMethod}\n` +
                `Address: ${order.address}\n` +
                `Items: ${order.items.map(item => `${item.name} (${item.quantity} x ${item.price})`).join(', ')}\n\n`;
        }).join('');

        const element = document.createElement('a');
        const file = new Blob([orderData], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = 'Order_History.txt';
        document.body.appendChild(element);
        element.click();
    };

    // Function to display specific item details
    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    return (
        <div className="order-summary-container">
            <h2>Order Summary</h2>

            {currentOrder ? (
                <div className="order-info">
                    <p><strong>Order Date:</strong> {currentOrder.orderDate}</p>
                    <p><strong>Expected Delivery Date:</strong> {currentOrder.expectedDeliveryDate}</p>
                    <p><strong>Payment Method:</strong> {currentOrder.paymentMethod}</p>
                    <p><strong>Delivery Address:</strong> {currentOrder.address}</p>

                    <h3>Items Ordered</h3>
                    <ul className="items-list">
                        {currentOrder.items.map((item, index) => (
                            <li key={index} onClick={() => handleItemClick(item)} style={{ cursor: 'pointer' }}>
                                <p>{item.name} - {item.quantity} x {item.price}</p>
                            </li>
                        ))}
                    </ul>

                    <button onClick={saveOrderToHistory} className="submit-button">Save to Order History</button>
                </div>
            ) : (
                <p>No current order found.</p>
            )}

            {/* Display selected item details */}
            {selectedItem && (
                <div className="selected-item-details">
                    <h3>Selected Item Details</h3>
                    <p><strong>Name:</strong> {selectedItem.name}</p>
                    <p><strong>Quantity:</strong> {selectedItem.quantity}</p>
                    <p><strong>Price:</strong> {selectedItem.price}</p>
                </div>
            )}

            <button onClick={downloadOrderData} className="submit-button">Download Order History</button>
            <button onClick={() => navigate('/products')}>Continue Shopping....🛒</button>
        </div>
    );
};

export default OrderSummary;
