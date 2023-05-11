import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent {
  productForm: FormGroup;
  isEditMode: boolean = false;
  newProduct = {
    name: '',
    description: '',
  };
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {
    this.productForm = this.formBuilder.group({
      id: [null],
      name: [''],
      description: [''],
    });
  }
  ngOnInit(): void {
    this.createProductForm();

    // Check if we're in edit mode
    const productId = this.route.snapshot.params['id'];
    if (productId) {
      this.isEditMode = true;
      this.loadProduct(productId);
    }
  }

  createProductForm(): void {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  loadProduct(productId: number): void {
    this.productService.getProductById(productId).subscribe(
      (product) => this.productForm.patchValue(product),
      (error) => console.error(error)
    );
  }

  onSubmit(): void {
    this.productService
      .addProduct(this.newProduct)
      .subscribe(() => this.router.navigate(['/products']));
  }
}
