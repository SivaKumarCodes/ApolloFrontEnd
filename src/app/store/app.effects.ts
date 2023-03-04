import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { loadingProdctsSucess, loadingProducts } from './app.actions';
import { ProductServiceService } from './product-service.service';

@Injectable()
export class ProductEffects {
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadingProducts),
      mergeMap(() => this.productService.getAll()),
      map((data) => loadingProdctsSucess({ products: data }))
    )
  );

  constructor(
    private actions$: Actions,
    private productService: ProductServiceService
  ) {}
}
