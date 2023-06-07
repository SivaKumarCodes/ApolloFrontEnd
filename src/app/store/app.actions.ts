import { createAction, props } from '@ngrx/store';
import { Brand, Product } from './app.store';

const _loadingProducts: string = '[Products] loading products';
const _loadingProdctsSucces: string = '[Products] loading products sucess';
const _loadingProdctsFailure: string = '[Products] loading products failure';
const _loadingBrands: string = '[some Brands] loading brands';
const _loadingBrandsSucess: string = '[some Brands] loading brands sucess';
const _loadingBrandsFailure: string = '[some Brands] loading brands failure';

export const loadingProducts = createAction(_loadingProducts);

export const loadingProdctsSucess = createAction(
  _loadingProdctsSucces,
  props<{ products: Product[] }>()
);

export const loadSomeBrands = createAction(_loadingBrands);
export const loadSomeBrandsSucessful = createAction(
  _loadingBrandsSucess,
  props<{ brands: Brand[] }>()
);
export const loadSomeBrandsFailure = createAction(_loadingBrandsFailure);

export const loadingProductFailure = createAction(_loadingProdctsFailure);
