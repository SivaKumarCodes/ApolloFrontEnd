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

export interface ProductState {
  brands: BrandItem;
  productTypes: string[];
  data: ProductTypeItem[];
  loading: boolean;
  failed: boolean;
}

export const initialState: ProductState = {
  brands: new BrandData(),
  productTypes: [],
  data: [],
  loading: false,
  failed: false,
};
