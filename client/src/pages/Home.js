import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL + '/products').then(res => setProducts(res.data));
  }, []);

  return (
    <div>
      <h1>Featured Phones & Accessories</h1>
      <div>
        {products.map(p => (
          <div key={p._id}>
            <img src={p.images[0]} alt={p.title} width="100" />
            <h2>{p.title}</h2>
            <p>{p.price}</p>
            <Link to={`/product/${p._id}`}>View</Link>
          </div>
        ))}
      </div>
    </div>
  );
}