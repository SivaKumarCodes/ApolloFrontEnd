import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, delay, map, mergeMap, of } from 'rxjs';
import {
  loadProductTypes,
  loadProductTypesSucess,
  loadSomeBrands,
  loadSomeBrandsFailure,
  loadSomeBrandsSucessful,
} from './app.actions';
import { ProductService } from './product-service.service';

@Injectable()
export class ProductEffects {
  // loadProducts$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(loadingProducts),
  //     mergeMap(() => this.productService.getAll()),
  //     // delay(1500),
  //     map((data) => loadingProdctsSucess({ products: data }))
  //   )
  // );

  loadSomeBrands$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadSomeBrands),
      mergeMap(() => this.productService.getSomeBrands()),
      map((data) => loadSomeBrandsSucessful({ brands: data })),
      catchError((err) => of(loadSomeBrandsFailure()))
    )
  );

  loadSomeProductTypes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProductTypes),
      mergeMap(() => this.productService.getProductTypes()),
      map((data) => loadProductTypesSucess({ types: data }))
    )
  );

  // makeOrder$ = createEffect(() => )
  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}
}
