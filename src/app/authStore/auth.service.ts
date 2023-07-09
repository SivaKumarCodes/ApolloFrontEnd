import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import {
  Address,
  AddressSent,
  Auth,
  Creds,
  Details,
  Review,
  UserOrders,
  UserRegistration,
} from './auth.store';

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
      .post<Auth>(
        'https://apollopharmacy.sivacodes.com/api/v1/token/',
        body,
        options
      )
      .pipe(catchError((err) => throwError(() => 'invalid username')));
  }

  register(user: UserRegistration) {
    return this.http.post<void>(
      'https://apollopharmacy.sivacodes.com/api/v1/register/',
      user
    );
  }

  checkEmail(email: string) {
    const result = this.http.get<{ value: boolean }>(
      'https://apollopharmacy.sivacodes.com/api/v1/checkmail/',

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
      'https://apollopharmacy.sivacodes.com/api/v1/getaddresses',
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
      'https://apollopharmacy.sivacodes.com/api/v1/removeaddress',
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
      'https://apollopharmacy.sivacodes.com/api/v1/addaddress',
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
      'https://apollopharmacy.sivacodes.com/api/v1/editaddress',
      address,
      options
    );
  }

  addDetails(token: string, details: Details) {
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
      'https://apollopharmacy.sivacodes.com/api/v1/adddetails',
      // 'http://localhost:8080/api/v1/adddetails',
      details,
      options
    );
  }

  getDetails(token: string) {
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

    return this.http.get<Details>(
      'https://apollopharmacy.sivacodes.com/api/v1/getdetails',
      // 'http://localhost:8080/api/v1/getdetails',
      options
    );
  }

  updateCreds(token: string, creds: Creds) {
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

    return this.http.post<Creds>(
      'https://apollopharmacy.sivacodes.com/api/v1/updatecreds',
      // 'http://localhost:8080/api/v1/updatecreds',
      creds,
      options
    );
  }

  getOrders(token: string) {
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

    return this.http.get<UserOrders[]>(
      // 'http://localhost:8080/api/v1/getorders',
      'https://apollopharmacy.sivacodes.com/api/v1/getorders',
      options
    );
  }

  getAllReviewsOfUser(token: string) {
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

    return this.http.get<Review[]>(
      // 'http://localhost:8080/api/v1/getallreviewsofuser',
      'https://apollopharmacy.sivacodes.com/api/v1/getallreviewsofuser',
      options
    );
  }
}
