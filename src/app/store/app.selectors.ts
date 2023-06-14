import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from './app.store';
import { getCurrentRoute } from './router.selectors';
import { state } from '@angular/animations';

const getProductState = createFeatureSelector<ProductState>('products');

// export const getProduct = (id: number) =>
//   createSelector(getProductState, (state) =>
//     state.products.find((i) => i.productId == id)
//   );

export const getBrands = createSelector(
  getProductState,
  (state) => state.brands.items
);

export const getBrandLoading = createSelector(
  getProductState,
  (state) => state.brands.loading
);

export const areBrandsLoaded = createSelector(
  getProductState,
  (state) => state.brands.loaded
);

export const getProductTypes = createSelector(
  getProductState,
  (state) => state.productTypes
);

export const getProductsOfProductType = createSelector(
  getProductState,
  (state: ProductState, props: { i: number }) => state.data[props.i].items
);

export const getProductsOfProductTypeLoading = createSelector(
  getProductState,
  (state: ProductState, props: { i: number }) => state.data[props.i].loading
);

export const getProductsType = createSelector(
  getCurrentRoute,
  (route) => route.state.params['type']
);

export const getProductName = createSelector(getCurrentRoute, (route) => {
  if (route) return route.state.params['name'];
  else return '';
});

export const getBrand = createSelector(
  getCurrentRoute,
  (route) => route.state.params['brand']
);

export const activeProduct = createSelector(
  getProductState,
  (state) => state.activeProduct.product
);

export const activeProductLoading = createSelector(
  getProductState,
  (state) => state.activeProduct.loading
);

// export const getProductsByType = createSelector(
//   getProducts,
//   getCurrentRoute,
//   (state, route) => {
//     if (route.state.params['type']) {
//       return state.filter((p) => p.productType == route.state.params['type']);
//     } else return state.filter((p) => p.brand == route.state.params['brand']);
//   }
// );
