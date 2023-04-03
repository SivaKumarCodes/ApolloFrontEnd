import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { act, Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
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
  withLatestFrom,
} from 'rxjs';
import {
  addAddress,
  addAddressSucessful,
  authenticateUser,
  authenticationFailure,
  authenticationSucessful,
  editAddress,
  getUserAddresses,
  getUserAddressesSucessful,
  registerUser,
  removeAddress,
  repopulateFailure,
  repopulateFromLocalStroage,
  repopulateSuccessful,
} from './auth.actions';
import { getToken } from './auth.selectors';
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
        return result;
      }),
      map((data) => {
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

  register$ = createEffect(() => {
    let email: string;
    let password: string;
    return this.actions$.pipe(
      ofType(registerUser),
      switchMap((action) => {
        email = action.email;
        password = action.password;
        return this.authService.register(action);
      }),
      map((data) => {
        return authenticateUser({ email, password });
      })
    );
  });

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
            addresses: null,
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

  loadAddresses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUserAddresses),
      withLatestFrom(this.state.select(getToken)),
      switchMap(([action, token]) => {
        return this.authService.getAddresses(token);
      }),
      map((data) => getUserAddressesSucessful({ addresses: data }))
    )
  );

  addAddress$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addAddress),
      withLatestFrom(this.state.select(getToken)),
      switchMap(([action, token]) => {
        return this.authService.addAddress(token, action.address);
      }),
      map((data) => getUserAddresses())
    )
  );

  removeAddress$ = createEffect(() =>
    this.actions$.pipe(
      ofType(removeAddress),
      withLatestFrom(this.state.select(getToken)),
      switchMap(([action, token]) => {
        return this.authService.removeAddress(token, action.id);
      }),
      map((data) => getUserAddresses())
    )
  );

  editAddress$ = createEffect(() =>
    this.actions$.pipe(
      ofType(editAddress),
      withLatestFrom(this.state.select(getToken)),
      switchMap(([action, token]) => {
        return this.authService.editAddress(token, action.address);
      }),
      map((data) => getUserAddresses())
    )
  );

  constructor(
    private actions$: Actions,
    private location: Location,
    private authService: AuthService,
    private state: Store
  ) {}
}
