import React, { useState } from 'react';
import PizzaForm from './PizzaForm';
import OrderList from './OrderList';
import { FaPizzaSlice } from 'react-icons/fa';
import { useOrderStore } from '../store/orderStore';

const Home: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { orders, addOrder } = useOrderStore();

  const handleSubmit = async (orderData: {
    fullName: string;
    size: string;
    toppings: string[];
  }) => {
    setIsLoading(true);
    setError(null);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      addOrder(orderData);
    } catch (err: any) {
      setError('An error occurred while placing your order. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Image Container */}
      <div 
        className="fixed inset-0"
        style={{ zIndex: -1 }}
      >
        <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
          <img src="https://images.unsplash.com/photo-1594007654729-407eedc4be65" alt="" className="w-full h-full object-cover rounded-xl" />
          <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591" alt="" className="w-full h-full object-cover rounded-xl" />
          <img src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3" alt="" className="w-full h-full object-cover rounded-xl hidden md:block" />
        </div>
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
      </div>

      {/* Content Container */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <FaPizzaSlice className="text-5xl text-red-500 mr-4 animate-bounce" />
              <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700">
                Pizza Paradise
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Craft your perfect pizza and track your delicious journey through our order history
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="transform transition-all duration-300 hover:scale-[1.02]">
              <PizzaForm
                onSubmit={handleSubmit}
                isLoading={isLoading}
                error={error}
              />
            </div>
            <div className="transform transition-all duration-300 hover:scale-[1.02]">
              <OrderList
                orders={orders}
                filter={filter}
                onFilterChange={setFilter}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;