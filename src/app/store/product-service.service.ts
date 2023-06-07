import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Brand, Product } from './app.store';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  getAll() {
    return this.http.get<Product[]>(
      'https://apollopharmacy.sivacodes.com/api/v1/products'
    );
  }

  getSomeBrands() {
    return this.http.get<Brand[]>('http://localhost:8080/api/v1/getbrands');
  }
}
