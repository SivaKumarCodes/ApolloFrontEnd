import { createAction, props } from '@ngrx/store';
import { Product } from './app.store';

const _loadingProducts: string = '[Products] loading products';
const _loadingProdctsSucces: string = '[Products] loading products sucess';
const _loadingProdctsFailure: string = '[Products] loading products failure';

export const loadingProducts = createAction(_loadingProducts);

export const loadingProdctsSucess = createAction(
  _loadingProdctsSucces,
  props<{ products: Product[] }>()
);

export const loadingProductFailure = createAction(_loadingProdctsFailure);
