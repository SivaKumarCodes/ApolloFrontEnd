import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponentRoutingModule } from './login-component-routing.module';
import { LoginComponentComponent } from './login-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [LoginComponentComponent],
  imports: [
    CommonModule,
    LoginComponentRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  exports: [LoginComponentComponent],
})
export class LoginComponentModule {}
