import { createAction, props } from '@ngrx/store';
import { Brand, Product } from './app.store';

const _loadingBrands: string = '[some Brands] loading brands';
const _loadingBrandsSucess: string = '[some Brands] loading brands sucess';
const _loadingBrandsFailure: string = '[some Brands] loading brands failure';

const _loadProducts = '[product types] load product types';
const _loadProductsSucess = '[product types] load product types sucess';

const _loadProductsOfProductType = '[product of Product Type] load ';
const _loadProductsOfProductTypeSucess =
  '[product of Product Type] load sucess ';
const _loadProductsOfProductTypeFail = '[product of Product Type] load Failure';

export const loadSomeBrands = createAction(_loadingBrands);
export const loadSomeBrandsSucessful = createAction(
  _loadingBrandsSucess,
  props<{ brands: Brand[] }>()
);
export const loadSomeBrandsFailure = createAction(_loadingBrandsFailure);

export const loadProductTypes = createAction(_loadProducts);

export const loadProductsOfProductTypes = createAction(
  _loadProductsOfProductType,
  props<{ productType: productType }>()
);

export const loadProductsOfProductTypesSucess = createAction(
  _loadProductsOfProductTypeSucess,
  props<{ in: number; data: Product[] }>()
);
export interface productType {
  ind: number;
  type: string;
}

export const loadProductsOfProductTypesFail = createAction(
  _loadProductsOfProductTypeFail,
  props<{ productType: productType }>()
);

export const loadProductTypesSucess = createAction(
  _loadProductsSucess,
  props<{ types: string[] }>()
);
