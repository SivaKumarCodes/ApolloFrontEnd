import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCartCount } from '../cartStore/cart.selectors';
import { getAuthSucess, getUserFirstName } from '../authStore/auth.selectors';
import { showSideBar } from '../popUpStore/popUp.actions';
import { Router } from '@angular/router';

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

  openSideBar() {
    this.state.dispatch(showSideBar());
  }

  options: dropdownOption[][] = [
    [
      {
        url: '/assets/ProductImage_1024x1024.webp',
        name: 'Multivitamins',
        link: 'Multivitamins',
      },
      {
        url: '/assets/protinex-health-and-nutritional-drink-mix-for-adults-with-high-protein-10.jpg',
        name: 'Nutritional Drinks',
        link: 'Nutritional Drinks',
      },
      {
        url: '/assets/on-Chocolate_Mint_nayble.webp',
        name: 'Protein Supplements',
        link: 'Protein Supplements',
      },
      {
        url: '/assets/41X7kn7DptL._SL1000_.jpg',
        name: 'Omega3 & Fish oil supplements',
        link: 'Omega3 Supplements',
      },
    ],
    [
      {
        url: '/assets/s-l1200.webp',
        name: 'Blood Glucose Monitors',
        link: 'Blood Glucose Monitors',
      },
    ],
    [
      {
        url: '/assets/haan-forest-grace-nourishing-prebiotic-body-lotion-250ml.jpg',
        name: 'Body Lotions',
        link: 'Body Lotions',
      },
    ],
    [
      {
        url: '/assets/constipation-herbal-treatment-250x250.webp',
        name: 'Ayurvedic Immunity Boosters',
        link: 'Ayurvedic Immunity Boosters',
      },
    ],
    [
      {
        url: '/assets/Schwabe-Triticum-Repens-Homeopathy-Dilution-6C-30C-200C-1M-10M.webp',
        name: 'Homeopathy Medicines',
        link: 'Homeopathy Medicines',
      },
    ],
  ];

  firstName!: string;
  authenticated!: boolean;

  constructor(private state: Store, private router: Router) {}

  showDropDown(value: dropdownContent) {
    this.dropdown.emit(value);
  }

  navigateToCart(event: Event) {
    event.stopPropagation();

    if (this.authenticated) this.router.navigate(['/cart']);
    else this.router.navigate(['/login']);
  }

  search(event: any) {
    this.router.navigate(['/products/'], {
      queryParams: { search: event.target.value },
    });
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
