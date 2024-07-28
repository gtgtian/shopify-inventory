// export class ProductService {
//   private apiUrl = 'https://your-backend-service.com/api/products';

//   constructor(private http: HttpClient) { }
import { Injectable } from '@angular/core';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private storageKey = 'products';

  constructor() { }

  getProductsFromStorage(): Product[] {
    const products = localStorage.getItem(this.storageKey);
    return products ? JSON.parse(products) : [];
  }

  private saveProductsToStorage(products: Product[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(products));
  }

  getProducts(): Product[] {
    return this.getProductsFromStorage();
  }

  getProduct(id: number): Product | undefined {
    const products = this.getProductsFromStorage();
    return products.find(p => p.id === id);
  }

  addProduct(product: Product): void {
    const products = this.getProductsFromStorage();
    product.id = products.length ? Math.max(...products.map(p => p.id!)) + 1 : 1;
    products.push(product);
    this.saveProductsToStorage(products);
  }

  updateProduct(updatedProduct: Product): void {
    const products = this.getProductsFromStorage();
    const index = products.findIndex(p => p.id === updatedProduct.id);
    if (index > -1) {
      products[index] = updatedProduct;
      this.saveProductsToStorage(products);
    } else {
      throw new Error('Product not found');
    }
  }

  deleteProduct(id: number): void {
    let products = this.getProductsFromStorage();
    products = products.filter(p => p.id !== id);
    this.saveProductsToStorage(products);
  }
}
