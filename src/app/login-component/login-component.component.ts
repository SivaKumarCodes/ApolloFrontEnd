import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css'],
})
export class LoginComponentComponent {
  loginForm = new FormGroup({
    user: new FormControl(''),
    password: new FormControl(''),
  });
  onLogin() {
    console.warn(this.loginForm.value);
  }
}
