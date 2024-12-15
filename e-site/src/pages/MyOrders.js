import React, { useEffect, useState } from 'react';

const MyOrders = () => {
  // Dummy order data
  const dummyOrders = [
    {
      id: 'ORD001',
      items: ['Product 1', 'Product 2'],
      total: 120.50,
    },
    {
      id: 'ORD002',
      items: ['Product 3'],
      total: 85.75,
    },
    {
      id: 'ORD003',
      items: ['Product 4'],
      total: 55.20,
    },
  ];

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Simulating fetching orders from localStorage or API
    const storedOrders = JSON.parse(localStorage.getItem('userOrders')) || dummyOrders;
    localStorage.setItem('userOrders', JSON.stringify(storedOrders)); // Store orders in localStorage
    setOrders(storedOrders);
  }, []);

  if (orders.length === 0) {
    return <div className="mt-16 text-center">No orders found.</div>;
  }

  return (
    <div className="orders-page mt-24 mx-auto max-w-4xl p-6 bg-gray-200 rounded">
      <h2 className="text-2xl font-bold mb-6 text-orange-500">My Orders</h2>
      <ul className="space-y-4">
        {orders.map((order, index) => (
          <li
            key={index}
            className="border p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300"
          >
            <p><strong>Order ID:</strong> {order.id}</p>
            <p><strong>Items:</strong> {order.items.join(', ')}</p>
            <p><strong>Total:</strong> ${order.total.toFixed(2)}</p>
            {/* Add other order details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyOrders;
