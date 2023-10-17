import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseURL = 'http://localhost:3001/products';

  constructor(private http: HttpClient) {}

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseURL).pipe();
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseURL, product);
  }
}
