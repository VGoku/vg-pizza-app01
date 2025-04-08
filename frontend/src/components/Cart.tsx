import React, { useState } from 'react';
import { FaShoppingCart, FaTrash, FaMinus, FaPlus } from 'react-icons/fa';
import { useCartStore } from '../store/cartStore';
import { useOrderStore } from '../store/orderStore';

const Cart: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const { items, removeItem, updateQuantity, clearCart, getTotal } = useCartStore();
  const { addOrder } = useOrderStore();

  const handlePlaceOrder = () => {
    if (items.length === 0) return;
    
    // Group all items into a single order
    addOrder({
      fullName: "Menu Order",
      size: "M", // Default size for menu orders
      toppings: [], // No custom toppings for menu orders
      items: items.map(item => ({
        id: item.id,
        name: item.name,
        quantity: item.quantity
      }))
    });

    setOrderPlaced(true);
    clearCart();
    setTimeout(() => {
      setOrderPlaced(false);
      setIsOpen(false);
    }, 3000);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 bg-red-500 text-white p-4 rounded-full shadow-lg hover:bg-red-600 transition-colors duration-200"
      >
        <FaShoppingCart className="text-2xl" />
        {items.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-white text-red-500 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
            {items.length}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-lg p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Your Cart</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            {orderPlaced ? (
              <div className="text-center py-8">
                <div className="text-green-500 text-5xl mb-4">🎉</div>
                <h3 className="text-xl font-bold text-green-500 mb-2">
                  Order Placed Successfully!
                </h3>
                <p className="text-gray-600">
                  Your delicious pizza will arrive in 30 minutes or less.
                </p>
              </div>
            ) : items.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500">Your cart is empty</p>
              </div>
            ) : (
              <>
                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between border-b pb-4"
                    >
                      <div className="flex-1">
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-gray-600">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                          className="text-red-500 hover:text-red-600"
                        >
                          <FaMinus />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="text-red-500 hover:text-red-600"
                        >
                          <FaPlus />
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-600 ml-2"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-semibold">Total:</span>
                    <span className="font-bold text-xl">${getTotal().toFixed(2)}</span>
                  </div>
                  <button
                    onClick={handlePlaceOrder}
                    className="w-full bg-red-500 text-white py-3 rounded-lg font-medium hover:bg-red-600 transition-colors duration-200"
                  >
                    Place Order
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;