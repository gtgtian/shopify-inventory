import { Component } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.css']
})
export class ProductAdminComponent {
  selectedProduct: Product | null = null;

  onSave(product: Product) {
    // Implement save logic (add or update)
  }

  onEdit(product: Product) {
    this.selectedProduct = product;
  }

  onCancel() {
    this.selectedProduct = null;
  }
}
