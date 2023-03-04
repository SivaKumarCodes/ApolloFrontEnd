import { state } from '@angular/animations';
import { RouterState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { pipe } from 'rxjs';
import { ProductState } from './app.store';
import { getCurrentRoute } from './router.selectors';

const getProductState = createFeatureSelector<ProductState>('products');

export const getProducts = createSelector(
  getProductState,
  (state) => state.products
);
export const getLoading = createSelector(
  getProductState,
  (state) => state.loading
);
export const getFailed = createSelector(
  getProductState,
  (state) => state.failed
);

export const getProductById = createSelector(
  getProducts,
  getCurrentRoute,
  (state, route) => state.find((p) => p.productId == route.state.params['id'])
);
