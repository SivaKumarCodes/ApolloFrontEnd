import { Review } from '../authStore/auth.store';
import { paymentOption } from '../cart-page/cart-page.component';

export interface Product {
  productId: number;
  productName: string;
  productType: string;
  brand: string;
  variants: Variant[];
  ratingCount: number;
  tags: string[];
  avgRating: number;
}

export interface ProductReview {
  review: string | null;
  rating: number | null;
  reviewedBy: string;
  reviewId: number;
}

export class ProductTypeFilters {
  type: string;
  brands: string[];
  tags: string[];
  sortBy: SortBy;

  constructor(type: string, brands: string[], tags: string[], sortBy: SortBy) {
    this.brands = brands;
    this.type = type;
    this.tags = tags;
    this.sortBy = sortBy;
  }

  get productType() {
    return this.type;
  }

  get brandsFilter() {
    return this.brands;
  }

  get tagsFilter() {
    return this.tags;
  }

  get sortby() {
    return this.sortBy;
  }
}

export enum SortBy {
  POPULARITY,
  PRICE_LOW_TO_HIGH,
  PRICE_HIGH_TO_LOW,
}

export class BrandFilters {
  brand: string;
  productTypes: string[];
  tags: string[];
  sortBy: SortBy;

  constructor(brand: string, types: string[], tags: string[], sortBy: SortBy) {
    this.brand = brand;
    this.productTypes = types;
    this.tags = tags;
    this.sortBy = sortBy;
  }

  get types() {
    return this.productTypes;
  }

  get getBrand() {
    return this.brand;
  }

  get tagsFilter() {
    return this.tags;
  }

  get sortby() {
    return this.sortBy;
  }
}

export interface Variant {
  variantId: number;
  price: number;
  quantity: number;
  images: string[];
  mesurement: string;
  available: number;
}
export interface Brand {
  id: number;
  brand: string;
  url: string;
}

export interface Order {
  addressId: number;
  paymentOption: paymentOption;
}

export interface DataItem {
  loaded: boolean;
  loading: boolean;
  failed: boolean;
}

export interface ProductTypeItem extends DataItem {
  items: Product[];
}

export interface BrandItem extends DataItem {
  items: Brand[];
}

export interface ProdData extends DataItem {
  product: Product | null;
}

export interface ProductGridData extends DataItem {
  productGrid: Product[];
}

export class BrandData implements BrandItem {
  loaded: boolean = false;
  loading: boolean = false;
  failed: boolean = false;
  items: Brand[] = [];
}

export class ProductData implements ProductTypeItem {
  loaded: boolean = false;
  loading: boolean = false;
  failed: boolean = false;
  items!: Product[];
}

export class ActiveProduct implements ProdData {
  loaded: boolean = false;
  loading: boolean = false;
  failed: boolean = false;
  product: Product | null = null;
}

export class ActiveProductGrid implements ProductGridData {
  loaded: boolean = false;
  loading: boolean = false;
  failed: boolean = false;
  productGrid: Product[] = [];
}
export interface ProductState {
  brands: BrandItem;
  productTypes: string[];
  data: ProductTypeItem[];
  loading: boolean;
  failed: boolean;
  activeProductGrid: ProductGridData;
  cartProducts: ProductGridData;
  activeProduct: ProdData;
  filterBrands: string[];
  filterTags: string[];
  filterBrandCount: any;
  filterTagCount: any;
  productReviews: ProductReview[];
}

export const initialState: ProductState = {
  brands: new BrandData(),
  productTypes: [],
  data: [],
  loading: false,
  failed: false,
  activeProductGrid: new ActiveProductGrid(),
  cartProducts: new ActiveProductGrid(),
  activeProduct: new ActiveProduct(),
  filterBrands: [],
  filterTags: [],
  filterBrandCount: {},
  filterTagCount: {},
  productReviews: [],
};
