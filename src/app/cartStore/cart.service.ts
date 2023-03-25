import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cartItem } from './cart.store';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  addToCart(item: cartItem, token: string) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: '*/*',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
        'Access-Control-Allow-Headers': 'Authorization',
        Authorization: `Bearer ${token}`,
      }),
    };

    const body = {
      productId: item.productId,
      variantId: item.variantId,
      quantity: item.quantity,
    };

    return this.http.post<void>(
      'http://localhost:8080/api/v1/addtocart',
      body,
      options
    );
  }

  removeFromCart(item: cartItem, token: string) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: '*/*',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
        'Access-Control-Allow-Headers': 'Authorization',
        Authorization: `Bearer ${token}`,
      }),
    };

    const body = {
      productId: item.productId,
      variantId: item.variantId,
      quantity: item.quantity,
    };

    return this.http.post<void>(
      'http://localhost:8080/api/v1/removefromcart',
      body,
      options
    );
  }

  getItemsCart(token: string) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: '*/*',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
        'Access-Control-Allow-Headers': 'Authorization',
        Authorization: `Bearer ${token}`,
      }),
    };

    return this.http.get<cartItem[]>(
      'http://localhost:8080/api/v1/getcart',
      options
    );
  }

  constructor(private http: HttpClient) {}
}
