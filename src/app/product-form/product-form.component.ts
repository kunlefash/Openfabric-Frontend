import { Component } from '@angular/core';

interface Product {
  name: string;
  description: string;
}

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  newProduct: Product = {
    name: '',
    description: ''
  };

  onSubmit(): void { }
}
