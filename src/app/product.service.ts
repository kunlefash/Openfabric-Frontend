import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/products`);
  }

  getProductById(productId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/products/${productId}`);
  }

  createProduct(product: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/products`, product);
  }

  updateProduct(productId: string, product: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/products/${productId}`, product);
  }

  deleteProduct(productId: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/products/${productId}`);
  }
}
