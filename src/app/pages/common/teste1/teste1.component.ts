import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PoPageAction } from '@po-ui/ng-components';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-teste1',
  templateUrl: './teste1.component.html',
  styleUrls: ['./teste1.component.scss'],
})
export class Teste1Component implements OnInit, OnDestroy {
  public literals: any = {};
  public listLiterals: any = {};
  public fields: Array<any> = [];
  public items: any = [];
  public listHeight: number = 0;
  public initialLoading: boolean = false;
  public loading: boolean = false;
  @Input() pageActions: PoPageAction[] = [];

  constructor(private router: Router, private productService: ProductService) {}

  ngOnDestroy(): void {}

  ngOnInit(): void {
    this.productService.read().subscribe((prod: any) => {
      this.items = prod;
    });

    this.pageActions.push({
      label: 'Novo',
      action: this.newItem.bind(this),
      icon: 'fa-solid fa-plus',
    });
  }

  newItem() {
    this.router.navigate([`newProduct`]);
  }

  printar(e: any) {
    console.log(e);
  }
}
