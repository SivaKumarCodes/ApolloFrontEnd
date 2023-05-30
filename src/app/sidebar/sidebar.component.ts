import { Component } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { dropdownOption } from '../navbar/navbar.component';
import { Store } from '@ngrx/store';
import { closeAll, closeSideBar } from '../popUpStore/popUp.actions';
import { Router } from '@angular/router';
import { isSideBarActive } from '../popUpStore/popUp.selectors';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(private state: Store, private router: Router) {}

  rightIcon = faChevronRight;

  sideBarSubscription$!: Subscription;

  isActive: boolean = false;

  activeSubOptions: number = -1;

  setActiveSubOption(i: number) {
    if (this.activeSubOptions == i) {
      this.activeSubOptions = -1;
      return;
    }

    this.activeSubOptions = i;
  }

  clearState() {
    this.activeSubOptions = -1;
    this.state.dispatch(closeAll());
  }

  openProducts(url: string) {
    this.clearState();
    this.router.navigate(['/products/', url]);
  }

  login() {
    this.clearState();
    this.router.navigate(['login']);
  }

  preventPropgation(event: Event) {
    event.stopPropagation();
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.sideBarSubscription$ = this.state
      .select(isSideBarActive)
      .subscribe((data) => {
        if (!data) this.clearState();
        this.isActive = data;
      });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.sideBarSubscription$.unsubscribe();
  }

  navbarOptions: string[] = [
    'Vitamins & Nutriton',
    'Healthcare Devices',
    'Personal Care',
    'Ayurveda Products',
    'Homeopathy',
  ];

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
}
