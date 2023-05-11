import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productId: string | null = null;
  product: any | null = null; // Assigning an initial value of null

  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('id');
      if (this.productId) {
        this.loadProduct();
      }
    });
  }

  loadProduct(): void {
    this.productService.getProductById(this.productId!).subscribe(
      (response: any) => {
        this.product = response;
      },
      (error: any) => {
        console.error('Failed to fetch product', error);
      }
    );
  }
}
