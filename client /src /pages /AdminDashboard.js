import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function AdminDashboard() {
  const [summary, setSummary] = useState({});
  useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL + '/admin/summary').then(res => setSummary(res.data));
  }, []);
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Users: {summary.users}</p>
      <p>Products: {summary.products}</p>
      <p>Orders: {summary.orders}</p>
      <p>Revenue: ₦{summary.revenue}</p>
    </div>
  );
}
