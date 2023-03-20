import { Component } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { ɵafterNextNavigation } from '@angular/router';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { debounceTime, map, Observable, of } from 'rxjs';
import { authenticateUser } from '../authStore/auth.actions';
import { AuthService } from '../authStore/auth.service';
import { registerUser } from '../authStore/auth.actions';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css'],
})
export class LoginComponentComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  constructor(private authService: AuthService, private store: Store) {}

  arrow = faArrowRight;

  formActive: boolean = false;

  passwordError: boolean = false;

  toggleActiveForm() {
    this.formActive = !this.formActive;
  }

  RegisterForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.pattern('^[a-zA-Z]+$'),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.pattern('^[a-zA-Z]+$'),
    ]),
    email: new FormControl(
      null,
      [Validators.required, Validators.email],
      [this.doesEmailExists(this.authService)]
    ),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(
        '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
      ),
    ]),
    rePassword: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      this.verifyPasswords,
    ]),
  });

  onLogin() {
    this.store.dispatch(
      authenticateUser({
        email: this.loginForm?.value.email!,
        password: this.loginForm?.value.password!,
      })
    );
  }

  userRegister() {
    this.store.dispatch(
      registerUser({
        firstName: this.firstName?.value!,
        lastName: this.lastName?.value!,
        email: this.Email?.value!,
        password: this.password?.value!,
      })
    );
  }

  doesEmailExists(authService: AuthService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      if (!control.invalid)
        return authService.checkEmail(control.value).pipe(
          debounceTime(5000),
          map((data) => {
            if (data.value) return { usernameAlreadyExists: data.value };
            else return null;
          })
        );
      else return of(null);
    };
  }

  verifyPasswords(c: AbstractControl): { notMatching: boolean } | null {
    if (c.parent?.get('password')?.value != c.parent?.get('rePassword')?.value)
      return { notMatching: true };

    return null;
  }

  showPasswordError() {
    this.passwordError = true;
    setTimeout(() => {
      this.passwordError = false;
    }, 5000);
  }

  get Password() {
    return this.RegisterForm.get('password');
  }

  get rePassword() {
    return this.RegisterForm.get('rePassword');
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  get firstName() {
    return this.RegisterForm.get('firstName');
  }

  get Email() {
    return this.RegisterForm.get('email');
  }

  get lastName() {
    return this.RegisterForm.get('lastName');
  }
}
