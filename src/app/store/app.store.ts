import { paymentOption } from '../cart-page/cart-page.component';

export interface Product {
  productId: number;
  productName: string;
  productType: string;
  brand: string;
  variants: Variant[];
  reviewCount: number;
  tags: string[];
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
  activeProduct: ProdData;
}

export const initialState: ProductState = {
  brands: new BrandData(),
  productTypes: [],
  data: [],
  loading: false,
  failed: false,
  activeProductGrid: new ActiveProductGrid(),
  activeProduct: new ActiveProduct(),
};
