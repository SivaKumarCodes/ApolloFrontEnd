import { Action, createReducer, on } from '@ngrx/store';
import {
  loadSomeBrands,
  loadSomeBrandsFailure,
  loadSomeBrandsSucessful,
  loadingProdctsSucess,
  loadingProductFailure,
  loadingProducts,
} from './app.actions';
import { initialState, ProductState } from './app.store';

const _productReducer = createReducer(
  initialState,
  on(loadingProducts, (state) => ({
    ...state,
    loading: true,
  })),
  on(loadingProdctsSucess, (state, action) => ({
    ...state,
    loading: false,
    failed: false,
    products: action.products,
  })),
  on(loadingProductFailure, (state) => ({
    ...state,
    loading: false,
    failed: true,
  })),
  on(loadSomeBrands, (state) => ({
    ...state,
    brands: {
      ...state.brands,
      brandsLoading: true,
      brandsLoaded: false,
    },
  })),
  on(loadSomeBrandsSucessful, (state, action) => ({
    ...state,
    brands: {
      ...state.brands,
      brandsLoaded: true,
      brandsLoading: false,
      someBrands: action.brands,
    },
  })),
  on(loadSomeBrandsFailure, (state) => ({
    ...state,
    brands: {
      ...state.brands,
      someBrandsFailure: true,
      brandsLoaded: false,
      brandsLoading: false,
    },
  }))
);

export function ProductReducer(state: any, action: any) {
  return _productReducer(state, action);
}
