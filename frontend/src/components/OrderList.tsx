import React from 'react';
import { FaFilter, FaPizzaSlice, FaCalendarAlt } from 'react-icons/fa';

interface OrderItem {
  id: string;
  name: string;
  quantity: number;
}

interface Order {
  id: string;
  fullName: string;
  size: string;
  toppings: string[];
  createdAt: string;
  items?: OrderItem[];
  name?: string;
}

interface OrderListProps {
  orders: Order[];
  filter: string;
  onFilterChange: (filter: string) => void;
}

const OrderList: React.FC<OrderListProps> = ({ orders, filter, onFilterChange }) => {
  const filteredOrders = filter === 'All' 
    ? orders 
    : orders.filter(order => order.size === filter);

  const getOrderDetails = (order: Order) => {
    // Check if the order has multiple items from the menu
    if (order.items && order.items.length > 0) {
      return order.items.map(item => 
        `${item.name}${item.quantity > 1 ? ` (×${item.quantity})` : ''}`
      ).join(', ');
    }

    // If it's a single menu item
    if (order.name) {
      return order.name;
    }

    // If it's a custom order with toppings
    const toppingNames: { [key: string]: string } = {
      '1': 'Pepperoni',
      '2': 'Green Peppers',
      '3': 'Pineapple',
      '4': 'Mushrooms',
      '5': 'Ham'
    };

    const toppingsText = order.toppings
      .map(id => toppingNames[id])
      .filter(Boolean)
      .join(', ');

    return toppingsText || 'Custom Pizza';
  };

  const getSizeLabel = (size: string) => {
    const sizes: { [key: string]: string } = {
      'S': 'Small (10")',
      'M': 'Medium (12")',
      'L': 'Large (14")',
    };
    return sizes[size] || size;
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
      <div className="bg-gradient-to-r from-red-600 to-red-700 p-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center">
            <FaPizzaSlice className="text-4xl text-white mr-4" />
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Order History</h2>
              <p className="text-white/80 text-sm mt-1">Track your pizza journey</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 bg-white/10 rounded-xl p-3">
            <FaFilter className="text-white" />
            <div className="flex flex-wrap gap-2">
              {['All', 'S', 'M', 'L'].map((size) => (
                <button
                  key={size}
                  data-testid={`filterBtn${size}`}
                  onClick={() => onFilterChange(size)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    filter === size
                      ? 'bg-white text-red-600'
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  {size === 'All' ? 'All Orders' : getSizeLabel(size)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-8">
        <div className="space-y-6">
          {filteredOrders.length === 0 ? (
            <div className="text-center py-12">
              <FaPizzaSlice className="text-6xl text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No orders found</p>
              <p className="text-gray-400">Your order history will appear here</p>
            </div>
          ) : (
            filteredOrders.map((order) => (
              <div
                key={order.id}
                className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-all duration-200 border border-gray-200 hover:border-red-200"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{order.fullName}</h3>
                    <div className="flex items-center text-gray-500 mt-2">
                      <FaCalendarAlt className="mr-2" />
                      <p className="text-sm">
                        {new Date(order.createdAt).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-xl text-sm font-semibold">
                    {getSizeLabel(order.size)}
                  </span>
                </div>
                
                <div className="mt-6">
                  <div className="flex items-center text-gray-700 mb-3">
                    <FaPizzaSlice className="mr-2" />
                    <h4 className="font-semibold">Pizza Selection</h4>
                  </div>
                  <div className="text-lg font-medium text-gray-800 mb-2">
                    {getOrderDetails(order)}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderList;