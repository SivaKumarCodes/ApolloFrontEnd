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

export interface ProductState {
  brands: {
    brandsLoaded: boolean;
    brandsLoading: boolean;
    someBrandsFailure: boolean;
    someBrands: Brand[];
  };
  products: Product[];
  loading: boolean;
  failed: boolean;
}

export const initialState: ProductState = {
  brands: {
    brandsLoaded: false,
    brandsLoading: false,
    someBrandsFailure: false,
    someBrands: [],
  },
  products: [],
  loading: false,
  failed: false,
};
