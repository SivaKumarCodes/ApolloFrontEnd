import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  catchError,
  concatMap,
  delay,
  map,
  mergeMap,
  of,
  switchMap,
  withLatestFrom,
} from 'rxjs';
import {
  LoadProductData,
  LoadProductDataSucess,
  ProductsOfProductTypesNull,
  loadProductGrid,
  loadProductGridSucess,
  loadProductTypes,
  loadProductTypesSucess,
  loadProductsOfProductTypes,
  loadProductsOfProductTypesSucess,
  loadSomeBrands,
  loadSomeBrandsFailure,
  loadSomeBrandsSucessful,
} from './app.actions';
import { ProductService } from './product-service.service';
import { Store } from '@ngrx/store';
import { getProductName } from './app.selectors';
import { getParams } from './router.selectors';

@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductService,
    private state: Store
  ) {}

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

  loadProduct = createEffect(() => {
    return this.actions$.pipe(
      ofType(LoadProductData),
      withLatestFrom(this.state.select(getProductName)),
      concatMap(([_, name]) => this.productService.getProductByName(name)),
      map((data) => LoadProductDataSucess({ product: data }))
    );
  });

  loadProductGrid$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadProductGrid),
      withLatestFrom(this.state.select(getParams)),
      mergeMap(([_, type]) => {
        if (type.state.queryParams['brand'] != undefined)
          return this.productService.getProductsOFBrands(
            type.state.queryParams['brand']
          );

        if (type.state.queryParams['type'] != undefined)
          return this.productService.getProductsFromProductTypes(
            type.state.queryParams['type']
          );

        return this.productService.getAll();
      }),
      map((data) => loadProductGridSucess({ products: data }))
    );
  });
}
