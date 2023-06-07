import { createAction, props } from '@ngrx/store';
import { Brand } from './app.store';

const _loadingBrands: string = '[some Brands] loading brands';
const _loadingBrandsSucess: string = '[some Brands] loading brands sucess';
const _loadingBrandsFailure: string = '[some Brands] loading brands failure';

const _loadProducts = '[product types] load product types';
const _loadProductsSucess = '[product types] load product types sucess';

export const loadSomeBrands = createAction(_loadingBrands);
export const loadSomeBrandsSucessful = createAction(
  _loadingBrandsSucess,
  props<{ brands: Brand[] }>()
);
export const loadSomeBrandsFailure = createAction(_loadingBrandsFailure);

export const loadProductTypes = createAction(_loadProducts);

export const loadProductTypesSucess = createAction(
  _loadProductsSucess,
  props<{ types: string[] }>()
);
