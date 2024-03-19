

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Address = ({ cartItems }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('cashOnDelivery');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/placeOrder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          address,
          paymentMethod,
          items: cartItems,
        }),
      });

      if (response.ok) {
        console.log('Order placed successfully!');
        navigate('/');
        alert("your oder is placed ")
      } else {
        console.error('Error placing the order');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="address-container">
      <h2>Provide Your Address and Payment Details</h2>
      <form onSubmit={handleFormSubmit} className="formaddress">
        <label className="addresslabel">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Address:
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Payment Method:
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="cashOnDelivery">Cash on Delivery</option>
            <option value="onlinePayment">Online Payment</option>
          </select>
        </label>
        <br />
        <button type="submit" className="addressbutton">
          Proceed to Order
        </button>
      </form>
    </div>
  );
};

export default Address;
