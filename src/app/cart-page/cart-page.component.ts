import { Component } from '@angular/core';
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';

import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

import { faMinus } from '@fortawesome/free-solid-svg-icons';

import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { getUserAddresses } from '../authStore/auth.actions';
import { getAddresses } from '../authStore/auth.selectors';
import { Address } from '../authStore/auth.store';
import {
  addToCart,
  addToCartEffect,
  RemoveFromCartEffect,
} from '../cartStore/cart.actions';
import { getCart, ProductVariant } from '../cartStore/cart.selectors';
import { cartItem } from '../cartStore/cart.store';
import { getProduct, getProductById } from '../store/app.selectors';
import { Product, Variant } from '../store/app.store';

interface cartEntity {
  image: string;
  brand: string;
  title: string;
  quantity: number;
  mesurement: string;
  purchaseQuantity: number;
  price: number;
}

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent {
  rupeeIcon = faRupeeSign;
  downIcon = faCaretDown;
  checkMarkIcon = faCheck;
  minusIcon = faMinus;
  plustIcon = faPlus;

  isSelected!: boolean[];

  totalSelected!: number;

  OrderStep: number = 0;

  setOrderStep(i: number) {
    this.OrderStep = i;
  }

  allItemInCart!: number;

  cartData!: cartItem[];

  cartItems: cartEntity[] = [];

  selectedAddress: number = 0;

  addresses!: Address[];

  showQuantityPicker: boolean = false;

  activeCartItem = -1;

  cartSubscription!: Subscription;

  totalAmount: number = 0;

  addressVisible: boolean = false;

  addressSubscription!: Subscription;

  setAddressVisible(val: boolean) {
    this.addressVisible = val;
  }

  getIcon() {
    if (this.totalSelected == this.allItemInCart) return this.checkMarkIcon;
    else return this.minusIcon;
  }

  changeQuantity(i: number) {
    this.showQuantityPicker = false;
    let activeItem = this.cartData[this.activeCartItem];
    if (activeItem.quantity > i) {
      activeItem.quantity = activeItem.quantity - i;
      this.state.dispatch(RemoveFromCartEffect(activeItem));
    } else {
      activeItem.quantity = i - activeItem.quantity;
      this.state.dispatch(addToCartEffect(activeItem));
    }
    this.totalPrice();
  }

  showPicker(i: number) {
    this.showQuantityPicker = true;
    this.activeCartItem = i;
  }

  closePicker() {
    this.showQuantityPicker = false;
  }

  invertSelection() {
    if (this.totalSelected > 0) {
      this.totalSelected = 0;
      this.isSelected = this.isSelected.map((i) => false);
    } else {
      this.totalSelected = this.allItemInCart;
      this.isSelected = this.isSelected.map((i) => true);
    }
    this.totalPrice();
  }

  constructor(private state: Store) {}

  removeFromCart(i: number) {
    let item = this.cartData[i];
    this.state.dispatch(RemoveFromCartEffect(item));
    this.totalPrice();
  }

  currencyFormat(i: number) {
    const INR = new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    });

    return INR.format(i).replace('₹', '');
  }

  selectAddress(i: number) {
    this.selectedAddress = i;
  }

  select(i: number) {
    this.isSelected[i] ? this.totalSelected-- : this.totalSelected++;
    this.isSelected[i] = !this.isSelected[i];
    this.totalPrice();
  }

  totalPrice() {
    let totalPrice = 0;
    this.cartItems.forEach(
      (item) => (totalPrice += item.purchaseQuantity * item.price)
    );
    this.totalAmount = totalPrice;
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.state.dispatch(getUserAddresses());

    this.cartSubscription = this.state.select(getCart).subscribe((data) => {
      let result: cartEntity[] = [];
      data.forEach((item) => {
        let cartItem: cartEntity = {
          image: '',
          title: '',
          purchaseQuantity: 0,
          quantity: 0,
          brand: '',
          mesurement: '',
          price: 0,
        };

        this.state.select(getProduct(item.productId)).subscribe((product) => {
          cartItem.brand = product?.brand!;
          let variant = product?.variants.find(
            (i) => i.variantId == item.variantId
          );
          cartItem.image = variant?.images[0]!;
          cartItem.purchaseQuantity = item.quantity;
          cartItem.title = product?.productName!;
          cartItem.mesurement = variant?.mesurement!;
          cartItem.quantity = variant?.quantity!;
          cartItem.price = variant?.price!;
          result.push(cartItem);
        });
      });
      this.cartItems = result;
      this.cartData = JSON.parse(JSON.stringify(data));
      let selectedRes: boolean[] = [];
      this.cartItems.forEach(() => selectedRes.push(true));
      this.isSelected = selectedRes;
      this.totalSelected = selectedRes.length;
      this.allItemInCart = selectedRes.length;
      this.totalPrice();
    });
    this.addressSubscription = this.state
      .select(getAddresses)
      .subscribe((data) => {
        this.addresses = data!;
        const ind = data?.findIndex((a) => a.isDefault);
        if (ind && ind >= 0) this.selectedAddress = ind!;
      });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.cartSubscription.unsubscribe();
    this.addressSubscription.unsubscribe();
  }
}
