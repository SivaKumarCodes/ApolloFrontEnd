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
  addDetails,
  authenticateUser,
  authenticationFailure,
  authenticationSucessful,
  clearUserData,
  editAddress,
  getDetails,
  getUserAddresses,
  getUserAddressesSucessful,
  logout,
  registerUser,
  removeAddress,
  repopulateFailure,
  repopulateFromLocalStroage,
  repopulateSuccessful,
  updateCreds,
  updateCredsSucessful,
  updateDetails,
  updateDetailsSucessful,
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

  logout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(logout),
      map(() => {
        localStorage.clear();
        return clearUserData();
      })
    );
  });

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
            updateSucessful: false,
            user: {
              firstName: localStorage.getItem('fname')!,
              lastName: localStorage.getItem('lname')!,
              email: localStorage.getItem('email')!,
            },
            sucess: true,
            addresses: null,
            details: {
              gender: null,
              dateOfBirth: null,
              mobile: null,
            },
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

  getDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getDetails),
      withLatestFrom(this.state.select(getToken)),
      switchMap(([action, token]) => {
        return this.authService.getDetails(token);
      }),
      map((data) => updateDetails({ details: data }))
    )
  );

  addDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addDetails),
      withLatestFrom(this.state.select(getToken)),
      switchMap(([action, token]) => {
        return this.authService.addDetails(token, action.details);
      }),
      map(() => updateDetailsSucessful())
    )
  );

  updateCreds$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateCreds),
      withLatestFrom(this.state.select(getToken)),
      switchMap(([action, token]) => {
        return this.authService.updateCreds(token, action);
      }),
      map((data) => {
        localStorage.setItem('fname', data.firstName);
        localStorage.setItem('lname', data.lastName);
        return updateCredsSucessful(data);
      })
    )
  );

  constructor(
    private actions$: Actions,
    private location: Location,
    private authService: AuthService,
    private state: Store
  ) {}
}
