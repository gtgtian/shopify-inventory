import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  selectedProduct: Product | null = null;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.products = this.productService.getProducts();
  }

  onSave(product: Product): void {
    if (this.selectedProduct) {
      product.id = this.selectedProduct.id;
      this.productService.updateProduct(product);
    } else {
      this.productService.addProduct(product);
    }
    this.selectedProduct = null;
    this.loadProducts();
  }

  onEdit(product: Product): void {
    this.selectedProduct = product;
  }

  onDelete(id: number): void {
    this.productService.deleteProduct(id);
    this.loadProducts();
  }
}
