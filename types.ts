export type UserRole = 'rider' | 'driver' | 'dispatcher';

export interface RideOption {
  id: string;
  name: string;
  description: string; // e.g., "4 min away"
  price: number;
  image: string;
}

export interface PaymentMethod {
  id: string;
  type: 'visa' | 'mastercard' | 'apple_pay';
  label: string;
  isDefault: boolean;
  icon: string;
}

export interface Request {
  id: string;
  type: 'ride' | 'delivery';
  price: number;
  pickup: string;
  dropoff: string;
  distance: string;
  duration: string;
}

export interface Delivery {
  id: string;
  driver: string;
  customer: string;
  status: 'In Transit' | 'Pending' | 'Delivered' | 'Cancelled';
  timeAgo: string;
}
