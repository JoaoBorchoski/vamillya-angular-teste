import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit, OnDestroy {
  product: Product = {
    name: '',
    price: null,
  };
  public productForm = this.formBuilder.group({
    name: '',
    price: '',
  });

  constructor(
    private router: Router,
    private productService: ProductService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}

  createProduct(): void {
    this.productService.createProduct(this.product).subscribe(() => {
      this.router.navigate(['/teste1']);
    });
  }

  submit() {
    console.log('enviado');
  }

  readonly customPageActions = [
    {
      index: 0,
      label: 'Criar',
      action: this.createProduct.bind(this),
      icon: 'fa-sharp fa-solid fa-plus',
    },
  ];

  ngOnDestroy(): void {}
}
