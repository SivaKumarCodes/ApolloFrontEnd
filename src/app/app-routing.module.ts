import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './cart-page/cart-page.component';
import { UserPageComponent } from './user-page/user-page.component';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () =>
      import('./product-grid/product-grid.module').then(
        (m) => m.ProductGridModule
      ),
  },
  {
    path: 'product/:name',
    loadChildren: () =>
      import('./product-page/product-page.module').then(
        (m) => m.ProductPageModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login-component/login-component.module').then(
        (m) => m.LoginComponentModule
      ),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./cart-page/cart-page.module').then((m) => m.CartPageModule),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./user-page/user-page.module').then((m) => m.UserPageModule),
  },
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./landing-page/landing-page.module').then(
        (m) => m.LandingPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      paramsInheritanceStrategy: 'always',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
