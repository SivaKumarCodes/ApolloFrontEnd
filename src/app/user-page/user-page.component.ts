import { Component, ViewChild } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import {
  addDetails,
  getAllReviewsOfUser,
  getDetails,
  getUserOrders,
  logout,
  removeAddress,
  updateCreds,
} from '../authStore/auth.actions';
import { Router } from '@angular/router';

import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { faCheck } from '@fortawesome/free-solid-svg-icons';

import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

import {
  Address,
  AddressType,
  Details,
  Gender,
  Review,
  User,
  UserOrders,
} from '../authStore/auth.store';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  getAddresses,
  getUser,
  selectDetails,
  selectUpdateDetails,
  selectUserOrders,
} from '../authStore/auth.selectors';
import { Subscription } from 'rxjs';
import { AddressChangerComponent } from '../address-changer/address-changer.component';
import { getUserAddresses } from '../authStore/auth.actions';
import { waitForAsync } from '@angular/core/testing';
import { showReviewPopup } from '../popUpStore/popUp.actions';

enum selectedOption {
  profile,
  address,
  orders,
}

interface orderInfo {
  name: string;
  brand: string;
  size: string;
  url: string;
  orderedOn: string;
  reviewExists: boolean;
  review: Review | null;
}

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
})
export class UserPageComponent {
  @ViewChild(AddressChangerComponent)
  addressComponent!: AddressChangerComponent;

  orders!: UserOrders[];

  orderInfoItems: orderInfo[] = [];

  righthIcon = faAngleDoubleRight;

  originalRatings: Review[] = [];

  showAddressEdit: boolean = false;
  checkIcon = faCheck;
  logoutSymbol = faArrowRight;
  logoutWarning: boolean = false;

  plusIcon = faPlus;

  addresses!: Address[];

  dotIcon = faCircle;

  details!: Details;

  GenderString!: string;

  addressVisible: boolean = false;

  selectedOption!: any;

  selectedGender: Gender = Gender.MALE;
  genders = Gender;

  options = selectedOption;

  fullName!: string;

  dobString!: string;

  enumAddresstype = AddressType;

  selectAddress(i: number) {
    this.selectedAddress = i;
  }

  removeAddress(id: number) {
    this.state.dispatch(removeAddress({ id }));
    if (this.defaultAddress > -1) this.selectedAddress = this.defaultAddress;
    else if (this.addresses.length >= 0) {
      this.selectedAddress = 0;
    }
  }

  openReviewPopup(
    name: string,
    url: string,
    review: string,
    rating: number,
    isEdit: boolean
  ) {
    this.state.dispatch(
      showReviewPopup({
        popUpData: {
          review: review,
          productName: name,
          productImgUrl: url,
          rating: rating,
          isEdit: isEdit,
        },
      })
    );
  }

  hoverRating(ind: number, rating: number) {
    // this.previousRating =
    setTimeout(() => {
      let review: Review | null = this.orderInfoItems[ind].review;

      if (review) {
        review.rating = rating;
      } else {
        this.orderInfoItems[ind].review = {
          rating: rating,
          reviewText: '',
        };
      }
    }, 200);
  }

  unHoverRating(ind: number) {
    setTimeout(() => {
      this.orderInfoItems[ind].review = this.originalRatings[ind];
    }, 200);
  }

  addAddress() {
    this.addressComponent.setMode(0, null);
    this.addressVisible = true;
  }

  setAddressVisible(val: boolean) {
    this.addressVisible = val;
  }

  editAddress(address: Address) {
    this.addressComponent.setMode(1, address);
    this.addressVisible = true;
  }

  detailsForm = new FormGroup({
    mobile: new FormControl(''),
    fName: new FormControl('', Validators.required),
    lName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    dob: new FormControl(''),
  });

  defaultAddress: number = 1;

  otherAddress!: number[];

  selectedAddress!: number;

  subscriptions: Subscription[] = [];

  constructor(private state: Store, private router: Router) {}

  user!: User;

  setOption(val: selectedOption) {
    this.selectedOption = val;
  }

  showLogOut(val: boolean) {
    this.logoutWarning = val;
  }

  setEditAddress(val: boolean) {
    this.showAddressEdit = val;
  }

  setSelectGender(gender: Gender) {
    this.selectedGender = gender;
  }

  saveDetails() {
    this.state.dispatch(
      addDetails({
        details: {
          mobile: this.mobile?.value!,
          gender: this.selectedGender,
          dateOfBirth: this.Dob?.value!,
        },
      })
    );
    this.state.dispatch(getDetails());
    this.state.dispatch(
      updateCreds({
        firstName: this.fName?.value!,
        lastName: this.lName?.value!,
      })
    );
    this.setEditAddress(false);
  }

  logOut() {
    this.state.dispatch(logout());
    this.showLogOut(false);
    this.router.navigate(['/']);
  }

  get fName() {
    return this.detailsForm.get('fName');
  }

  get lName() {
    return this.detailsForm.get('lName');
  }

  get email() {
    return this.detailsForm.get('email');
  }
  get mobile() {
    return this.detailsForm.get('mobile');
  }

  get Dob() {
    return this.detailsForm.get('dob');
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.state.dispatch(getUserOrders());

    this.state.dispatch(getDetails());

    this.state.dispatch(getAllReviewsOfUser());

    this.subscriptions.push(
      this.state.select(getUser).subscribe((data) => {
        this.fName?.setValue(data?.firstName!);
        this.lName?.setValue(data?.lastName!);
        this.email?.setValue(data?.email!);

        this.fullName = data?.firstName! + ' ' + data?.lastName;
        this.user = data!;
      })
    );

    this.subscriptions.push(
      this.state.select(selectDetails).subscribe((data) => {
        this.details = data!;
        this.selectedGender = data?.gender!;
        this.mobile?.setValue(data?.mobile!);
        this.Dob?.setValue(data?.dateOfBirth!);

        if (this.Dob?.value)
          this.dobString = new Date(this.Dob?.value!).toLocaleDateString(
            'en-US'
          );
        else this.dobString = '-not-added-';

        if (this.selectedGender) this.GenderString = '' + data?.gender!;
        else this.GenderString = '-not-added-';
      })
    );

    this.subscriptions.push(
      this.state.select(selectUpdateDetails).subscribe((data) => {
        if (data) this.state.dispatch(getDetails());
      })
    );

    this.selectedOption = selectedOption.orders;

    this.state.dispatch(getUserAddresses());

    this.subscriptions.push(
      this.state.select(getAddresses).subscribe((data) => {
        this.addresses = data!;
        const ind = data?.findIndex((a) => a.defaultAddress);
        this.defaultAddress = ind!;

        if (ind != undefined && ind > -1) {
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
      })
    );

    this.subscriptions.push(
      this.state.select(selectUserOrders).subscribe((data) => {
        this.orders = data;
        data.forEach((order: UserOrders) => {
          if (order) {
            order.items.forEach((item) => {
              let variantIndex = item.product.variants.findIndex(
                (i) => i.variantId == item.variantId
              );

              let variant = item.product.variants[variantIndex];
              let size: string = variant.quantity + ' ' + variant.mesurement;

              let info: orderInfo = {
                name: item.product.productName,
                brand: item.product.brand,
                size: size,
                url: variant.images[0],
                orderedOn: order.timeCreated,
                reviewExists: item.review != null,
                review:
                  item.review == null
                    ? null
                    : JSON.parse(JSON.stringify(item.review)),
              };

              this.orderInfoItems.push(info);
              this.originalRatings.push(item.review);
            });
          }
        });
      })
    );
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscriptions.forEach((i) => i.unsubscribe());
  }
}
