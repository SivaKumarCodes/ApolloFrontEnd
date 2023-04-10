import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Address, AddressSent, Auth, UserRegistration } from './auth.store';

interface loginRequest {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  authenticate(email: string, password: string) {
    const body: loginRequest = { email, password };
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: '*/*',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
        'Access-Control-Allow-Headers': 'Authorization',
      }),
    };

    return this.http
      .post<Auth>('http://localhost:8080/api/v1/token/', body, options)
      .pipe(catchError((err) => throwError(() => 'invalid username')));
  }

  register(user: UserRegistration) {
    return this.http.post<void>('http://localhost:8080/api/v1/register/', user);
  }

  checkEmail(email: string) {
    const result = this.http.get<{ value: boolean }>(
      'http://localhost:8080/api/v1/checkmail/',

      {
        params: {
          email,
        },
      }
    );
    return result;
  }

  getAddresses(token: string) {
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

    return this.http.get<Address[]>(
      'http://localhost:8080/api/v1/getaddresses',
      options
    );
  }

  removeAddress(token: string, id: number) {
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
      id: id,
    };

    return this.http.post<void>(
      'http://localhost:8080/api/v1/removeaddress',
      body,
      options
    );
  }

  addAddress(token: string, address: AddressSent) {
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

    return this.http.post<void>(
      'http://localhost:8080/api/v1/addaddress',
      address,
      options
    );
  }

  editAddress(token: string, address: Address) {
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

    return this.http.post<void>(
      'http://localhost:8080/api/v1/editaddress',
      address,
      options
    );
  }
}
