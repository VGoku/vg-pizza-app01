import React, { useState } from 'react';
import { FaPizzaSlice, FaCheck, FaTimes, FaUser, FaChevronDown } from 'react-icons/fa';

interface PizzaFormProps {
  onSubmit: (order: {
    fullName: string;
    size: string;
    toppings: string[];
  }) => void;
  isLoading: boolean;
  error: string | null;
}

const PizzaForm: React.FC<PizzaFormProps> = ({ onSubmit, isLoading, error }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    size: 'M',
    toppings: [] as string[],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleToppingChange = (toppingId: string) => {
    setFormData(prev => ({
      ...prev,
      toppings: prev.toppings.includes(toppingId)
        ? prev.toppings.filter(id => id !== toppingId)
        : [...prev.toppings, toppingId],
    }));
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
      <div className="bg-gradient-to-r from-red-500 to-red-600 p-8">
        <div className="flex items-center justify-center">
          <FaPizzaSlice className="text-5xl text-white mr-4 animate-bounce" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Create Your Pizza
          </h2>
        </div>
        <p className="text-white/80 text-center mt-2">
          Customize your perfect pizza
        </p>
      </div>

      <div className="p-6 md:p-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="relative">
            <label htmlFor="fullName" className="block text-base font-semibold text-gray-700 mb-2">
              Full Name
            </label>
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                id="fullName"
                data-testid="fullNameInput"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="pl-10 w-full rounded-lg border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 transition duration-200 text-lg"
                required
                minLength={3}
                maxLength={20}
                placeholder="Enter your name"
              />
            </div>
          </div>

          <div>
            <label htmlFor="size" className="block text-base font-semibold text-gray-700 mb-2">
              Pizza Size
            </label>
            <div className="relative">
              <select
                id="size"
                data-testid="sizeSelect"
                value={formData.size}
                onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                className="appearance-none w-full rounded-lg border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 transition duration-200 pr-10 text-lg"
              >
                <option value="S">Small (10")</option>
                <option value="M">Medium (12")</option>
                <option value="L">Large (14")</option>
              </select>
              <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>

          <div>
            <label className="block text-base font-semibold text-gray-700 mb-3">
              Select Your Toppings
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { id: '1', name: 'Pepperoni' },
                { id: '2', name: 'Green Peppers' },
                { id: '3', name: 'Pineapple' },
                { id: '4', name: 'Mushrooms' },
                { id: '5', name: 'Ham' },
              ].map((topping) => (
                <label
                  key={topping.id}
                  className={`flex items-center p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer ${
                    formData.toppings.includes(topping.id)
                      ? 'border-red-500 bg-red-50'
                      : 'border-gray-200 hover:border-red-300'
                  }`}
                >
                  <input
                    type="checkbox"
                    data-testid={`check${topping.name.replace(/\s+/g, '')}`}
                    checked={formData.toppings.includes(topping.id)}
                    onChange={() => handleToppingChange(topping.id)}
                    className="hidden"
                  />
                  <span className="flex-1 text-lg font-medium">{topping.name}</span>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                    formData.toppings.includes(topping.id)
                      ? 'bg-red-500 border-red-500'
                      : 'border-gray-300'
                  }`}>
                    {formData.toppings.includes(topping.id) && (
                      <FaCheck className="text-white text-sm" />
                    )}
                  </div>
                </label>
              ))}
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg flex items-center">
              <FaTimes className="text-red-500 mr-3 flex-shrink-0" />
              <p className="text-red-700">{error}</p>
            </div>
          )}

          <button
            type="submit"
            data-testid="submit"
            disabled={isLoading}
            className={`w-full py-4 px-6 rounded-xl text-white font-bold text-lg transition-all duration-200 transform hover:scale-[1.02] ${
              isLoading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
            }`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              <span className="flex items-center justify-center">
                <FaCheck className="mr-2" />
                Place Order
              </span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PizzaForm;