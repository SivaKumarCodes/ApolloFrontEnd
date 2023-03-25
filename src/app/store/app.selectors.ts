import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from './app.store';
import { getCurrentRoute } from './router.selectors';

const getProductState = createFeatureSelector<ProductState>('products');

export const getProducts = createSelector(
  getProductState,
  (state) => state.products
);

export const getProduct = (id: number) =>
  createSelector(getProductState, (state) =>
    state.products.find((i) => i.productId == id)
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

export const getProductsByType = createSelector(
  getProducts,
  getCurrentRoute,
  (state, route) => {
    if (route.state.params['type']) {
      return state.filter((p) => p.productType == route.state.params['type']);
    } else return state.filter((p) => p.brand == route.state.params['brand']);
  }
);
