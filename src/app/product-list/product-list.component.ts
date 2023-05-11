import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'description'];
  products: any[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description of Product 1'
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description of Product 2'
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description of Product 3'
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'Description of Product 4'
    }
  ];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
}
