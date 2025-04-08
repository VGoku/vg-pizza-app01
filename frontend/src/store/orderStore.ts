import { create } from 'zustand';
import { Order, OrderData } from '../types';

interface OrderStore {
  orders: Order[];
  addOrder: (orderData: OrderData) => void;
}

export const useOrderStore = create<OrderStore>((set) => ({
  orders: [],
  addOrder: (orderData) => {
    set((state) => ({
      orders: [
        {
          id: crypto.randomUUID(),
          ...orderData,
          createdAt: new Date().toISOString(),
        },
        ...state.orders,
      ],
    }));
  },
}));