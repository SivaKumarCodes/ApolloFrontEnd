import { Component, ViewChild } from '@angular/core';
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';

import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

import { faMinus } from '@fortawesome/free-solid-svg-icons';

import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { getUserAddresses, removeAddress } from '../authStore/auth.actions';
import { getAddresses, getAuthSucess } from '../authStore/auth.selectors';
import { Address } from '../authStore/auth.store';
import {
  addToCart,
  addToCartEffect,
  clearOrder,
  makeOrder,
  orderInitated,
  RemoveFromCartEffect,
  repopulateCart,
} from '../cartStore/cart.actions';
import {
  getCart,
  getOrderNum,
  getOrderSucess,
  ProductVariant,
} from '../cartStore/cart.selectors';
import { Order, cartItem } from '../cartStore/cart.store';
import { getProduct, getProductById } from '../store/app.selectors';
import { Product, Variant } from '../store/app.store';
import { AddressType } from '../authStore/auth.store';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { AddressChangerComponent } from '../address-changer/address-changer.component';

export enum paymentOption {
  UPI,
  NETBANKING,
  CARD,
  COD,
}

export enum saleStatus {
  PROCESSING,
  SHIPPED,
  IN_TRANSIT,
  DELIVERED,
}

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
  @ViewChild(AddressChangerComponent)
  addressComponent!: AddressChangerComponent;

  rupeeIcon = faRupeeSign;
  downIcon = faCaretDown;
  checkMarkIcon = faCheck;
  minusIcon = faMinus;
  plustIcon = faPlus;
  dotIcon = faCircle;

  orderSucessSubcription!: Subscription;

  enumAddresstype = AddressType;

  deliveryDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  selectedPaymentOption: paymentOption = paymentOption.COD;

  paymentOptions = paymentOption;

  changePaymentOption(paymentOption: paymentOption) {
    this.selectedPaymentOption = paymentOption;
  }

  monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  isSelected!: boolean[];

  totalSelected!: number;

  OrderStep: number = 0;

  otherAddress: number[] = [];

  setOrderStep(i: number) {
    this.OrderStep = i;
  }

  allItemInCart!: number;

  defaultAdress!: number;

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

  selectedItems: cartEntity[] = [];

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

    let result: cartEntity[] = [];
    this.isSelected.forEach((val, index) => {
      if (val) result.push(this.cartItems[index]);
    });

    this.selectedItems = result;

    this.selectedItems.forEach(
      (item) => (totalPrice += item.purchaseQuantity * item.price)
    );
    this.totalAmount = totalPrice;
  }

  removeAddress(id: number) {
    this.state.dispatch(removeAddress({ id }));
    if (this.defaultAdress > -1) this.selectedAddress = this.defaultAdress;
    else if (this.addresses.length >= 0) {
      this.selectedAddress = 0;
    }
  }

  addAddress() {
    this.addressComponent.setMode(0, null);
    this.addressVisible = true;
  }

  editAddress(address: Address) {
    this.addressComponent.setMode(1, address);
    this.addressVisible = true;
  }

  makeOrder() {
    const items: cartItem[] = [];

    this.selectedItems.forEach((val, ind) => {
      if (val) {
        const item: cartItem = {
          productId: this.cartData[ind].productId,
          variantId: this.cartData[ind].variantId,
          quantity: this.cartData[ind].quantity,
        };
        items.push(item);
      }
    });

    console.log(items);

    const body: Order = {
      addressId: this.addresses[this.selectedAddress].id,
      paymentOption: this.selectedPaymentOption,
      items: items,
    };

    this.state.dispatch(orderInitated());
    this.state.dispatch(makeOrder({ order: body }));
  }

  orderNum$ = this.state.select(getOrderNum);

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.state.select(getAuthSucess).subscribe((data) => {
      if (data) this.state.dispatch(getUserAddresses());
    });

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
        const ind = data?.findIndex((a) => a.defaultAddress);
        this.defaultAdress = ind!;
        if (ind && ind >= 0) {
          this.selectedAddress = ind;
        }

        if (data?.length! >= 0) {
          // this.otherAddress = data?.filter((i) => !i.isDefault)!;
          let otherAddress: number[] = [];
          data?.forEach((address, i) => {
            if (!address.defaultAddress) otherAddress.push(i);
            this.otherAddress = otherAddress;
          });
        }
      });

    this.orderSucessSubcription = this.state
      .select(getOrderSucess)
      .subscribe((val) => {
        if (val) {
          this.state.dispatch(repopulateCart());
          this.setOrderStep(2);
        }
      });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.cartSubscription.unsubscribe();
    this.addressSubscription.unsubscribe();
    this.OrderStep = 0;
    this.state.dispatch(clearOrder());
  }
}
