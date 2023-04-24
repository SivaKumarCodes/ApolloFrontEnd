import { Component } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import {
  addDetails,
  getDetails,
  logout,
  updateCreds,
} from '../authStore/auth.actions';
import { Router } from '@angular/router';

import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Details, Gender, User } from '../authStore/auth.store';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  getUser,
  selectDetails,
  selectUpdateDetails,
} from '../authStore/auth.selectors';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
})
export class UserPageComponent {
  editAddress: boolean = false;
  checkIcon = faCheck;
  logoutSymbol = faArrowRight;
  logoutWarning: boolean = false;

  details!: Details;

  GenderString!: string;

  selectedGender: Gender = Gender.MALE;
  genders = Gender;

  fullName!: string;

  dobString!: string;

  detailsForm = new FormGroup({
    mobile: new FormControl(''),
    fName: new FormControl('', Validators.required),
    lName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    dob: new FormControl(''),
  });

  constructor(private state: Store, private router: Router) {}

  user!: User;

  showLogOut(val: boolean) {
    this.logoutWarning = val;
  }

  setEditAddress(val: boolean) {
    this.editAddress = val;
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
  }
}
