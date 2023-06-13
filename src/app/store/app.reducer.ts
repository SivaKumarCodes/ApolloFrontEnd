import { Action, createReducer, on } from '@ngrx/store';
import {
  loadProductTypesSucess,
  loadProductsOfProductTypes,
  loadProductsOfProductTypesSucess,
  loadSomeBrands,
  loadSomeBrandsFailure,
  loadSomeBrandsSucessful,
} from './app.actions';
import {
  initialState,
  ProductData,
  ProductState,
  ProductTypeItem,
} from './app.store';

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
      loaded: false,
      loading: false,
      failed: true,
    },
  })),
  on(loadProductsOfProductTypes, (state, action) => {
    let newData: ProductTypeItem[] = JSON.parse(JSON.stringify(state.data));
    newData[action.productType.ind].failed = false;
    newData[action.productType.ind].loaded = false;
    newData[action.productType.ind].loading = true;
    return {
      ...state,
      data: newData,
    };
  }),

  on(loadProductsOfProductTypesSucess, (state, action) => {
    let newData: ProductTypeItem[] = JSON.parse(JSON.stringify(state.data));
    newData[action.in].failed = false;
    newData[action.in].loaded = true;
    newData[action.in].loading = false;
    newData[action.in].items = action.data;
    return {
      ...state,
      data: newData,
    };
  }),
  on(loadProductTypesSucess, (state, action) => ({
    ...state,
    productTypes: action.types,
    data: action.types.map((i) => new ProductData()),
  }))
);

export function ProductReducer(state: any, action: any) {
  return _productReducer(state, action);
}
