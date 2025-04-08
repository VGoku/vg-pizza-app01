export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface OrderItem {
  id: string;
  name: string;
  quantity: number;
}

export interface Order {
  id: string;
  fullName: string;
  size: string;
  toppings: string[];
  createdAt: string;
  items?: OrderItem[];
  name?: string;
}

export interface OrderData {
  fullName: string;
  size: string;
  toppings: string[];
  items?: OrderItem[];
  name?: string;
}