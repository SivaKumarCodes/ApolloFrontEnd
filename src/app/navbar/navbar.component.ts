import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCartCount } from '../cartStore/cart.selectors';
import { getAuthSucess, getUserFirstName } from '../authStore/auth.selectors';
import {
  closeDropDownMenu,
  showDropdownMenu,
  showSideBar,
} from '../popUpStore/popUp.actions';
import { Router } from '@angular/router';
import {
  getActiveDropDownSection,
  isDropDownActive,
} from '../popUpStore/popUp.selectors';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  host: {
    class: 'landing__page',
  },
})
export class NavbarComponent implements OnInit {
  authDropDown: boolean = false;
  activeSection: number = 0;
  isDropdownMenuActive: boolean = false;

  cartCount$ = this.state.select(getCartCount);

  navbarOptions: string[] = [
    'Vitamins & Nutriton',
    'Healthcare Devices',
    'Personal Care',
    'Ayurveda Products',
    'Homeopathy',
  ];

  toggleProfile(flag: boolean) {
    this.authDropDown = flag;
  }

  openSideBar() {
    this.state.dispatch(showSideBar());
  }

  firstName!: string;
  authenticated!: boolean;

  constructor(private state: Store, private router: Router) {}

  showDropDown(i: number) {
    this.state.dispatch(showDropdownMenu({ activeSection: i + 1 }));
  }

  closeDropDown() {
    this.state.dispatch(closeDropDownMenu());
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
    this.state.select(getActiveDropDownSection).subscribe((data) => {
      this.activeSection = data;
    });
    this.state.select(isDropDownActive).subscribe((data) => {
      this.isDropdownMenuActive = data;
    });
  }
}
