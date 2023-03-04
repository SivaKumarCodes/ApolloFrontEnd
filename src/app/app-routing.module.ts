import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'products',
    pathMatch: 'full',
    loadChildren: () =>
      import('./product-grid/product-grid.module').then(
        (m) => m.ProductGridModule
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./landing-page/landing-page.module').then(
        (m) => m.LandingPageModule
      ),
  },
  {
    path: 'product/:id',
    loadChildren: () =>
      import('./product-page/product-page.module').then(
        (m) => m.ProductPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
