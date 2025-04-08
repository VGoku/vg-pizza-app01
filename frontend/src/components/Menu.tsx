import React, { useState } from 'react';
import { FaPizzaSlice, FaStar, FaShoppingCart, FaFilter } from 'react-icons/fa';
import Cart from './Cart';
import { useCartStore } from '../store/cartStore';

interface PizzaItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  popular: boolean;
  allergens: string[];
  dietary: {
    vegetarian: boolean;
    vegan: boolean;
    glutenFree?: boolean;
  };
}

const pizzas: PizzaItem[] = [
  {
    id: '1',
    name: 'Margherita Classic',
    description: 'Fresh tomatoes, mozzarella, basil, and extra virgin olive oil',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591',
    popular: true,
    allergens: ['milk', 'gluten'],
    dietary: {
      vegetarian: true,
      vegan: false,
      glutenFree: false
    }
  },
  {
    id: '2',
    name: 'Pepperoni Feast',
    description: 'Classic pepperoni with extra cheese and our signature tomato sauce',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3',
    popular: true,
    allergens: ['milk', 'gluten'],
    dietary: {
      vegetarian: false,
      vegan: false,
      glutenFree: false
    }
  },
  {
    id: '3',
    name: 'Veggie Delight',
    description: 'Bell peppers, mushrooms, onions, and black olives on a whole wheat crust',
    price: 13.99,
    image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65',
    popular: false,
    allergens: ['gluten'],
    dietary: {
      vegetarian: true,
      vegan: true,
      glutenFree: false
    }
  },
  {
    id: '4',
    name: 'Hawaiian Paradise',
    description: 'Ham, pineapple, and mozzarella with a sweet and tangy sauce',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b',
    popular: true,
    allergens: ['milk', 'gluten'],
    dietary: {
      vegetarian: false,
      vegan: false,
      glutenFree: false
    }
  },
];

type FilterType = 'all' | 'vegetarian' | 'vegan' | 'gluten-free';

const Menu: React.FC = () => {
  const { addItem } = useCartStore();
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [showDietaryInfo, setShowDietaryInfo] = useState<string | null>(null);

  const handleAddToCart = (pizza: PizzaItem) => {
    addItem({
      id: pizza.id,
      name: pizza.name,
      price: pizza.price,
    });
  };

  const filteredPizzas = pizzas.filter(pizza => {
    switch (activeFilter) {
      case 'vegetarian':
        return pizza.dietary.vegetarian;
      case 'vegan':
        return pizza.dietary.vegan;
      case 'gluten-free':
        return pizza.dietary.glutenFree;
      default:
        return true;
    }
  });

  return (
    <div className="min-h-screen relative">
      {/* Background Image Grid */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
          <img src="https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f" alt="" className="w-full h-full object-cover rounded-xl" />
          <img src="https://images.unsplash.com/photo-1585238342024-78d387f4a707" alt="" className="w-full h-full object-cover rounded-xl" />
          <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38" alt="" className="w-full h-full object-cover rounded-xl hidden md:block" />
          <img src="https://images.unsplash.com/photo-1593560708920-61dd98c46a4e" alt="" className="w-full h-full object-cover rounded-xl hidden md:block" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-red-50/80 to-red-100/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <FaPizzaSlice className="text-5xl text-red-500 mr-4 animate-bounce" />
              <h1 className="text-5xl font-bold text-gray-900">
                Our Menu
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our delicious selection of handcrafted pizzas
            </p>
          </div>

          {/* Filter Section */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  activeFilter === 'all'
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                All Pizzas
              </button>
              <button
                onClick={() => setActiveFilter('vegetarian')}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  activeFilter === 'vegetarian'
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                Vegetarian
              </button>
              <button
                onClick={() => setActiveFilter('vegan')}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  activeFilter === 'vegan'
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                Vegan
              </button>
              <button
                onClick={() => setActiveFilter('gluten-free')}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  activeFilter === 'gluten-free'
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                Gluten Free
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPizzas.map((pizza) => (
              <div
                key={pizza.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
              >
                <div className="relative">
                  <img
                    src={pizza.image}
                    alt={pizza.name}
                    className="w-full h-64 object-cover"
                  />
                  {pizza.popular && (
                    <div className="absolute top-4 right-4 bg-yellow-400 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                      <FaStar className="mr-1" />
                      Popular
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{pizza.name}</h3>
                    <button
                      onClick={() => setShowDietaryInfo(showDietaryInfo === pizza.id ? null : pizza.id)}
                      className="text-gray-500 hover:text-red-500 transition-colors duration-200"
                    >
                      <FaFilter />
                    </button>
                  </div>
                  
                  {showDietaryInfo === pizza.id && (
                    <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm">
                        <p className="font-semibold mb-2">Dietary Information:</p>
                        <div className="space-y-1">
                          {pizza.dietary.vegetarian && (
                            <span className="inline-block mr-2 px-2 py-1 bg-green-100 text-green-800 rounded">
                              Vegetarian
                            </span>
                          )}
                          {pizza.dietary.vegan && (
                            <span className="inline-block mr-2 px-2 py-1 bg-green-100 text-green-800 rounded">
                              Vegan
                            </span>
                          )}
                          {pizza.dietary.glutenFree && (
                            <span className="inline-block mr-2 px-2 py-1 bg-blue-100 text-blue-800 rounded">
                              Gluten Free
                            </span>
                          )}
                        </div>
                        <p className="mt-2 text-gray-600">
                          <span className="font-semibold">Contains:</span> {pizza.allergens.join(', ')}
                        </p>
                      </div>
                    </div>
                  )}

                  <p className="text-gray-600 mb-4">{pizza.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-red-500">${pizza.price}</span>
                    <button 
                      onClick={() => handleAddToCart(pizza)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center"
                    >
                      <FaShoppingCart className="mr-2" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Cart />
      </div>
    </div>
  );
};

export default Menu;