import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, Observable } from 'rxjs';
import {
  authenticateUser,
  authenticationFailure,
  authenticationSucessful,
  repopulateFailure,
  repopulateFromLocalStroage,
  repopulateSuccessful,
} from './auth.actions';
import { AuthService } from './auth.service';
import { Auth } from './auth.store';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authenticateUser),
      mergeMap(() => {
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
      }),
      map((data) => authenticationSucessful({ auth: data }))
    )
  );

  repopulate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(repopulateFromLocalStroage),
      mergeMap(() => {
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
      }),
      map((data) => {
        if (data.user?.firstName) return repopulateSuccessful({ auth: data });
        else return repopulateFailure();
      })
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
