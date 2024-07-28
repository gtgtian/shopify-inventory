export interface Product {
    id?: number;  // Change id type to number
    name: string;
    description: string;
    price: number;
    category?: string;
    stockQuantity?: number;
  }
  