import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Product {
  name: string;
  description: string;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  displayedColumns: string[] = ['name', 'description'];
  products: Product[] = [
    { name: 'Product 1', description: 'Description 1' },
    { name: 'Product 2', description: 'Description 2' },
    { name: 'Product 3', description: 'Description 3' }
  ];

  constructor(private router: Router) {}

  navigateToDetail(productId: number): void {
    this.router.navigate(['/products', productId]);
  }
}
