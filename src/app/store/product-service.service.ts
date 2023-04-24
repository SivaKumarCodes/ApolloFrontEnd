import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './app.store';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  constructor(private http: HttpClient) {}
  getAll() {
    return this.http.get<Product[]>(
      'https://apollopharmacy.sivacodes.com/api/v1/products'
    );
  }
}
