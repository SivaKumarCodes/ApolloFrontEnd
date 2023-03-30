import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Address, Auth, UserRegistration } from './auth.store';

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

    console.log(options);

    return this.http
      .get<Auth>('http://localhost:8080/api/v1/token/', options)
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

  addAddress(token: string, address: Address) {
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
}
