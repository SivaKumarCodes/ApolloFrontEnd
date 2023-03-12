import { Action, createReducer, on } from '@ngrx/store';
import {
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
  on(loadingProductFailure, (state, action) => ({
    ...state,
    loading: false,
    failed: true,
  }))
);

export function ProductReducer(state: any, action: any) {
  return _productReducer(state, action);
}
