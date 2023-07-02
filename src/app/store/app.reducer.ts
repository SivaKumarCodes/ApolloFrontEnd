import { createReducer, on } from '@ngrx/store';
import {
  LoadProductData,
  LoadProductDataSucess,
  loadGridFiltersWithoutTagsSucess,
  loadProductGrid,
  loadProductGridBrandsWithTags,
  loadProductGridSucess,
  loadProductGridWithFilters,
  loadProductGridWithFiltersSucesse,
  loadProductGridWithoutTagsFilters,
  loadProductTypesSucess,
  loadProductsOfProductTypes,
  loadProductsOfProductTypesSucess,
  loadSomeBrands,
  loadSomeBrandsFailure,
  loadSomeBrandsSucessful,
} from './app.actions';
import {
  ActiveProduct,
  ActiveProductGrid,
  initialState,
  ProdData,
  ProductData,
  ProductState,
  ProductTypeItem,
} from './app.store';
import { act } from '@ngrx/effects';

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
    // newData[action.productType.ind].loaded = false;
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
  })),
  on(LoadProductData, (state) => {
    let newActiveProduct: ProdData = new ActiveProduct();
    newActiveProduct.loading = true;
    return {
      ...state,
      activeProduct: newActiveProduct,
    };
  }),
  on(LoadProductDataSucess, (state, action) => {
    let newActiveProduct: ProdData = new ActiveProduct();
    newActiveProduct.loading = false;
    newActiveProduct.loaded = true;
    newActiveProduct.product = action.product;
    return {
      ...state,
      activeProduct: newActiveProduct,
    };
  }),
  on(loadProductGrid, (state) => {
    let newActiveGrid = new ActiveProductGrid();
    newActiveGrid.failed = false;
    newActiveGrid.loaded = false;
    newActiveGrid.loading = true;
    return {
      ...state,
      activeProductGrid: newActiveGrid,
    };
  }),
  on(loadProductGridSucess, (state, action) => {
    let newActiveGrid = new ActiveProductGrid();
    newActiveGrid.failed = false;
    newActiveGrid.loaded = true;
    newActiveGrid.loading = false;
    newActiveGrid.productGrid = action.products;

    let brands: string[] = [...new Set(action.products.map((i) => i.brand))];

    let brandCount: any = {};
    let tagCount: any = {};

    action.products
      .map((i) => i.brand)
      .forEach((i) => {
        if (brandCount[i]) brandCount[i]++;
        else brandCount[i] = 1;
      });

    action.products.forEach((i) =>
      i.tags.forEach((t) => {
        if (tagCount[t]) tagCount[t]++;
        else tagCount[t] = 1;
      })
    );

    let tags: string[];
    let tagsUniq: Set<string> = new Set();

    action.products.forEach((i) => i.tags.forEach((t) => tagsUniq.add(t)));
    tags = [...tagsUniq];

    return {
      ...state,
      activeProductGrid: newActiveGrid,
      filterBrands: brands,
      filterTags: tags,
      filterBrandCount: brandCount,
      filterTagCount: tagCount,
    };
  }),
  on(loadProductGridWithFilters, (state, action) => {
    let newActiveGrid: ActiveProductGrid = JSON.parse(
      JSON.stringify(state.activeProductGrid)
    );
    newActiveGrid.failed = false;
    newActiveGrid.loaded = false;
    newActiveGrid.loading = true;
    return {
      ...state,
      activeProductGrid: newActiveGrid,
    };
  }),
  on(loadProductGridWithFiltersSucesse, (state, action) => {
    let newActiveProductGrid: ActiveProductGrid = JSON.parse(
      JSON.stringify(state.activeProductGrid)
    );
    newActiveProductGrid.productGrid = action.products;

    newActiveProductGrid.failed = false;
    newActiveProductGrid.loaded = true;
    newActiveProductGrid.loading = false;

    let tags: string[];
    let tagsUniq: Set<string> = new Set();

    action.products.forEach((i) => i.tags.forEach((t) => tagsUniq.add(t)));
    tags = [...tagsUniq];

    http: return {
      ...state,
      activeProductGrid: newActiveProductGrid,
      filterTags: tags,
    };
  }),
  on(loadProductGridWithoutTagsFilters, (state, action) => {
    let newActiveGrid: ActiveProductGrid = JSON.parse(
      JSON.stringify(state.activeProductGrid)
    );

    newActiveGrid.failed = false;
    newActiveGrid.loaded = false;
    newActiveGrid.loading = true;

    return {
      ...state,
      activeProductGrid: newActiveGrid,
    };
  }),
  on(loadGridFiltersWithoutTagsSucess, (state, action) => {
    let newActiveProductGrid: ActiveProductGrid = JSON.parse(
      JSON.stringify(state.activeProductGrid)
    );
    newActiveProductGrid.productGrid = action.products;

    newActiveProductGrid.failed = false;
    newActiveProductGrid.loaded = true;
    newActiveProductGrid.loading = false;

    http: return {
      ...state,
      activeProductGrid: newActiveProductGrid,
    };
  }),
  on(loadProductGridBrandsWithTags, (state, action) => {
    let newActiveGrid: ActiveProductGrid = JSON.parse(
      JSON.stringify(state.activeProductGrid)
    );
    newActiveGrid.failed = false;
    newActiveGrid.loaded = false;
    newActiveGrid.loading = true;

    return {
      ...state,
      activeProductGrid: newActiveGrid,
    };
  })
);

export function ProductReducer(state: any, action: any) {
  return _productReducer(state, action);
}
