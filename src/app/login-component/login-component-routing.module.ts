import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './login-component.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginComponentRoutingModule {}
