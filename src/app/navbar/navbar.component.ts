import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCartCount } from '../cartStore/cart.selectors';
import { getAuthSucess, getUserFirstName } from '../authStore/auth.selectors';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  host: {
    class: 'landing__page',
  },
})
export class NavbarComponent implements OnInit {
  @Input() isactive!: boolean[];

  @Output() dropdown = new EventEmitter<dropdownContent>();

  authDropDown: boolean = false;

  cartCount$ = this.state.select(getCartCount);

  navbarOptions: string[] = [
    'Vitamins & Nutriton',
    'Healthcare Devices',
    'Personal Care',
    'Ayurveda Products',
    'Homeopathy',
  ];

  toggleActive(state: boolean, ind: number) {
    this.isactive[ind] = state;
  }

  toggleProfile(flag: boolean) {
    this.authDropDown = flag;
  }

  options: dropdownOption[][] = [
    [
      {
        url: '/assets/multivitamin.png',
        name: 'Multivitamins',
        link: 'Multivitamin',
      },
      {
        url: '/assets/nutritionalDrinks.webp',
        name: 'Nutritional Drinks',
        link: 'Nutritional Drinks',
      },
      {
        url: '/assets/proteinSupplements.webp',
        name: 'Protein Supplements',
        link: 'Protein Supplements',
      },
      {
        url: '/assets/fishOil.webp',
        name: 'Omega3 & Fish oil supplements',
        link: 'Omega3',
      },
    ],
    [
      {
        url: '/assets/bloodGlucose.webp',
        name: 'Blood Glucose Monitors',
        link: 'Blood Glucose Monitors',
      },
    ],
    [],
    [],
    [],
    [],
  ];

  firstName!: string;
  authenticated!: boolean;

  constructor(private state: Store) {}

  showDropDown(value: dropdownContent) {
    this.dropdown.emit(value);
  }

  ngOnInit(): void {
    this.state.select(getAuthSucess).subscribe((data) => {
      this.authenticated = data;
    });
    this.state.select(getUserFirstName).subscribe((data) => {
      this.firstName = data!;
    });
  }
}

export interface dropdownOption {
  url: string;
  name: string;
  link: string;
}

export interface dropdownContent {
  index: number;
  options: dropdownOption[];
  value: boolean;
}
