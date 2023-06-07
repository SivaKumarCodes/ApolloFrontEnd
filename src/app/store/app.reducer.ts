import { Action, createReducer, on } from '@ngrx/store';
import {
  loadProductTypesSucess,
  loadSomeBrands,
  loadSomeBrandsFailure,
  loadSomeBrandsSucessful,
} from './app.actions';
import { initialState, ProductState } from './app.store';

const _productReducer = createReducer(
  initialState,
  on(loadSomeBrands, (state) => ({
    ...state,
    brands: {
      ...state.brands,
      // brandsLoading: true,
      // brandsLoaded: false,
      loading: true,
      loaded: false,
    },
  })),
  on(loadSomeBrandsSucessful, (state, action) => ({
    ...state,
    brands: {
      ...state.brands,
      loaded: true,
      loading: false,
      items: action.brands,
    },
  })),
  on(loadSomeBrandsFailure, (state) => ({
    ...state,
    brands: {
      ...state.brands,
      // someBrandsFailure: true,
      // brandsLoaded: false,
      // brandsLoading: false,
      loaded: false,
      loading: false,
      failed: true,
    },
  })),
  on(loadProductTypesSucess, (state, action) => ({
    ...state,
    productTypes: action.types,
  }))
);

export function ProductReducer(state: any, action: any) {
  return _productReducer(state, action);
}
