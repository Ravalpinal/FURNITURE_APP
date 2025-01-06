import React, { useState } from 'react';


const Payment = () => {
    const [paymentMethod, setPaymentMethod] = useState('');
    const [address, setAddress] = useState('');

    const currentDate = new Date();
    const expectedDeliveryDate = new Date(currentDate);
    expectedDeliveryDate.setDate(currentDate.getDate() + 5);

    const formatDate = (date) => {
        return date.toISOString().split('T')[0]; // Format date as YYYY-MM-DD
    };

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (paymentMethod === '' || address === '') {
            alert('Please fill in all required fields.');
        } else {
            const orderDetails = {
                paymentMethod: paymentMethod,
                address: address,
                orderDate: formatDate(currentDate),
                expectedDeliveryDate: formatDate(expectedDeliveryDate),
                items: JSON.parse(localStorage.getItem('cartItems')) || [], // Retrieve items from localStorage
            };
            
            // Save order details in localStorage
            localStorage.setItem('orderSummary', JSON.stringify(orderDetails));

            alert('Your order has been placed successfully!');
            // Redirect to Order Summary Page
            window.location.href = '/order-summary'; // Make sure this route exists
        }
    };

    return (
        <div className="payment-container">
            <h2>Choose Your Payment Method</h2>
            <form onSubmit={handleSubmit}>
                <div className="payment-option">
                    <input
                        type="radio"
                        id="cashOnDelivery"
                        name="paymentMethod"
                        value="Cash on Delivery"
                        onChange={handlePaymentMethodChange}
                    />
                    <label htmlFor="cashOnDelivery">Cash on Delivery</label>
                </div>
                <div className="payment-option">
                    <input
                        type="radio"
                        id="upiPayment"
                        name="paymentMethod"
                        value="Payment by UPI ID"
                        onChange={handlePaymentMethodChange}
                    />
                    <label htmlFor="upiPayment">Payment by UPI ID</label>
                </div>

                {paymentMethod === 'Payment by UPI ID' && (
                    <div className="upi-input">
                        <label htmlFor="upiID">Enter UPI ID:</label>
                        <input type="text" id="upiID" placeholder="Your UPI ID" required />
                    </div>
                )}

                <div className="address-input">
                    <label htmlFor="address">Enter Delivery Address:</label>
                    <textarea
                        id="address"
                        value={address}
                        onChange={handleAddressChange}
                        placeholder="Your delivery address"
                        required
                    />
                </div>

                <div className="date-info">
                    <p><strong>Order Date:</strong> {formatDate(currentDate)}</p>
                    <p><strong>Expected Delivery Date:</strong> {formatDate(expectedDeliveryDate)}</p>
                </div>

                <button type="submit" className="submit-button">Place Order</button>
            </form>
        </div>
    );
};

export default Payment;
