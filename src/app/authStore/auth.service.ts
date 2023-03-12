import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from './auth.store';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  authenticate(username: string, password: string) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: '*/*',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
        'Access-Control-Allow-Headers': 'Authorization',
        Authorization: 'Basic ' + window.btoa(`${username}:${password}`),
      }),
    };

    return this.http.get<Auth>('http://localhost:8080/api/v1/token/', options);
  }
}
