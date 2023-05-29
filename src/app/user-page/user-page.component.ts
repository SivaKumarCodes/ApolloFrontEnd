import { Component, ViewChild } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import {
  addDetails,
  getDetails,
  logout,
  removeAddress,
  updateCreds,
} from '../authStore/auth.actions';
import { Router } from '@angular/router';

import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { faCheck } from '@fortawesome/free-solid-svg-icons';
import {
  Address,
  AddressType,
  Details,
  Gender,
  User,
} from '../authStore/auth.store';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  getAddresses,
  getUser,
  selectDetails,
  selectUpdateDetails,
} from '../authStore/auth.selectors';
import { Subscription } from 'rxjs';
import { AddressChangerComponent } from '../address-changer/address-changer.component';
import { getUserAddresses } from '../authStore/auth.actions';

enum selectedOption {
  profile,
  address,
  orders,
}

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
})
export class UserPageComponent {
  @ViewChild(AddressChangerComponent)
  addressComponent!: AddressChangerComponent;

  showAddressEdit: boolean = false;
  checkIcon = faCheck;
  logoutSymbol = faArrowRight;
  logoutWarning: boolean = false;
  plusIcon = faPlus;

  addressSubscription$!: Subscription;

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

    this.state.dispatch(getDetails());
    this.state.select(getUser).subscribe((data) => {
      this.fName?.setValue(data?.firstName!);
      this.lName?.setValue(data?.lastName!);
      this.email?.setValue(data?.email!);

      this.fullName = data?.firstName! + ' ' + data?.lastName;
      this.user = data!;
    });

    this.state.select(selectDetails).subscribe((data) => {
      this.details = data!;
      this.selectedGender = data?.gender!;
      this.mobile?.setValue(data?.mobile!);
      this.Dob?.setValue(data?.dateOfBirth!);

      if (this.Dob?.value)
        this.dobString = new Date(this.Dob?.value!).toLocaleDateString('en-US');
      else this.dobString = '-not-added-';

      if (this.selectedGender) this.GenderString = '' + data?.gender!;
      else this.GenderString = '-not-added-';
    });

    this.state.select(selectUpdateDetails).subscribe((data) => {
      if (data) this.state.dispatch(getDetails());
    });
    this.selectedOption = selectedOption.profile;

    this.state.dispatch(getUserAddresses());

    this.addressSubscription$ = this.state
      .select(getAddresses)
      .subscribe((data) => {
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
      });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.addressSubscription$.unsubscribe();
  }
}
