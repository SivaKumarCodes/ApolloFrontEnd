import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Brand, BrandFilters, Product, ProductTypeFilters } from './app.store';

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

  getProductByName(name: string) {
    return this.http.get<Product>(
      // 'http://localhost:8080/api/v1/product'
      'https://apollopharmacy.sivacodes.com/api/v1/product',
      {
        params: {
          name,
        },
      }
    );
  }

  getSomeBrands() {
    return this.http.get<Brand[]>(
      'https://apollopharmacy.sivacodes.com/api/v1/getbrands'
    );
  }

  getProductTypes() {
    return this.http.get<string[]>(
      'https://apollopharmacy.sivacodes.com/api/v1/getproducttypes'
    );
  }

  getProductsOFBrands(filters: BrandFilters) {
    return this.http.post<Product[]>(
      'https://apollopharmacy.sivacodes.com/api/v1/productsbybrand',
      filters
    );
  }

  getProductsFromProductTypes(filters: ProductTypeFilters) {
    return this.http.post<Product[]>(
      'https://apollopharmacy.sivacodes.com/api/v1/productsbytype',
      // 'http://localhost:8080/api/v1/productsbytype',
      filters
    );
  }
}
