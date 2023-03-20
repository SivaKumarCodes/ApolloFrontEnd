export const initialCartState: cartState = { cart: [] };

export interface cartItem {
  productId: number;
  variantId: number;
  quantity: number;
  addenOn: Date;
}

export interface cartState {
  cart: cartItem[];
}
