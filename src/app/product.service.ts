import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface Product {
  id: number;
  name: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Product 1', description: 'Description 1' },
    { id: 2, name: 'Product 2', description: 'Description 2' },
    { id: 3, name: 'Product 3', description: 'Description 3' }
  ];

  private productsSubject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(this.products);

  constructor() {}

  getProducts(): Observable<Product[]> {
    return this.productsSubject.asObservable();
  }

  addProduct(product: Product): void {
    const newProduct: Product = { ...product, id: this.products.length + 1 };
    this.products.push(newProduct);
    this.productsSubject.next(this.products);
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }
}
