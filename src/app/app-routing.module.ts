import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './cart-page/cart-page.component';

const routes: Routes = [
  {
    path: 'products/:type',
    pathMatch: 'full',
    loadChildren: () =>
      import('./product-grid/product-grid.module').then(
        (m) => m.ProductGridModule
      ),
  },
  {
    path: 'product/:id',
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
    component: CartPageComponent,
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
