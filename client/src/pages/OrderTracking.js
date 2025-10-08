import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function OrderTracking() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const buyerId = localStorage.getItem('userId');
    axios.get(process.env.REACT_APP_API_URL + `/orders/buyer/${buyerId}`).then(res => setOrders(res.data));
  }, []);
  return (
    <div>
      <h2>My Orders</h2>
      <ul>
        {orders.map(order => (
          <li key={order._id}>
            {order.products.map(p => <span key={p.product._id}>{p.product.title} x {p.quantity} </span>)}
            Status: {order.status}
          </li>
        ))}
      </ul>
    </div>
  );
}