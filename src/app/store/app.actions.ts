import { createAction, createSelector, props } from '@ngrx/store';
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

const _loadProduct = '[product] load product';
const _loadProductSucess = '[product] load product sucess';
const _loadProductFailure = '[product] load product failure';

const _loadProductGrid = '[product grid] load productGrid';
const _loadProductGridSucess = '[product grid] load productGrid sucess';

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

export const LoadProductData = createAction(
  _loadProduct,
  props<{ name: string }>
);

export const LoadProductDataSucess = createAction(
  _loadProductSucess,
  props<{ product: Product }>()
);

export const loadProductsOfProductTypesFail = createAction(
  _loadProductsOfProductTypeFail,
  props<{ productType: productType }>()
);

export const ProductsOfProductTypesNull = createAction(
  '[load product type] null'
);

export const loadProductTypesSucess = createAction(
  _loadProductsSucess,
  props<{ types: string[] }>()
);

export const loadProductGrid = createAction(_loadProductGrid);

export const loadProductGridSucess = createAction(
  _loadProductGridSucess,
  props<{ products: Product[] }>()
);
