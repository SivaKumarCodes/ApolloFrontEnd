import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, Observable } from 'rxjs';
import { authenticateUser, authenticationSucessful } from './auth.actions';
import { AuthService } from './auth.service';
import { Auth } from './auth.store';

@Injectable()
export class AuthEffects {
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authenticateUser),
      mergeMap(() => {
        if (localStorage.getItem('token') == null) {
          const result = this.authService.authenticate(
            'sivakumar.av2312@gmail.com',
            'password'
          );
          result.forEach((data) => {
            localStorage.setItem('token', data.token);
            localStorage.setItem('fname', data.user!.firstName);
            localStorage.setItem('lname', data.user!.lastName);
            localStorage.setItem('email', data.user!.email);
          });
          return result;
        } else {
          const result = new Observable<Auth>((observer) => {
            observer.next({
              token: localStorage.getItem('token')!,
              user: {
                firstName: localStorage.getItem('fname')!,
                lastName: localStorage.getItem('lname')!,
                email: localStorage.getItem('email')!,
              },
              sucess: true,
            });
          });
          return result;
        }
      }),
      map((data) => authenticationSucessful({ auth: data }))
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
