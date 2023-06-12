import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, delay, map, mergeMap, of } from 'rxjs';
import {
  loadProductTypes,
  loadProductTypesSucess,
  loadProductsOfProductTypes,
  loadProductsOfProductTypesSucess,
  loadSomeBrands,
  loadSomeBrandsFailure,
  loadSomeBrandsSucessful,
} from './app.actions';
import { ProductService } from './product-service.service';

@Injectable()
export class ProductEffects {
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

  loadProductsOfType$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadProductsOfProductTypes),
      mergeMap((action) =>
        this.productService
          .getProductsFromProductTypes(action.productType.type)
          .pipe(
            map((data) =>
              loadProductsOfProductTypesSucess({
                data: data,
                in: action.productType.ind,
              })
            )
          )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}
}
