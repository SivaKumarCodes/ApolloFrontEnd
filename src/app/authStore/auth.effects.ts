import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  catchError,
  map,
  mergeMap,
  Observable,
  of,
  repeat,
  switchMap,
  tap,
  throwError,
} from 'rxjs';
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
      mergeMap((action) => {
        const result = this.authService.authenticate(
          action.email!,
          action.password!
        );
        console.log('hai');
        return result;
      }),
      map((data) => {
        console.log(data);
        if (data == null) return authenticationFailure();

        localStorage.setItem('token', data.token);
        localStorage.setItem('fname', data.user!.firstName);
        localStorage.setItem('lname', data.user!.lastName);
        localStorage.setItem('email', data.user!.email);

        return authenticationSucessful({ auth: data });
      }),
      tap((data) => {
        if (data != null) this.location.back();
      }),
      catchError((err) => {
        return of(authenticationFailure());
      }),
      repeat()
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

  constructor(
    private actions$: Actions,
    private location: Location,
    private authService: AuthService
  ) {}
}
