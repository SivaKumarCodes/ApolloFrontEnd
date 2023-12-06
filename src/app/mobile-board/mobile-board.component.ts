import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { dropdownOption } from '../popUpStore/popUp.store';
import { DropdownMenuState } from '../popUpStore/popUp.selectors';

@Component({
  selector: 'app-mobile-board',
  templateUrl: './mobile-board.component.html',
  styleUrls: ['./mobile-board.component.css'],
})
export class MobileBoardComponent {
  options: dropdownOption[] = [];

  constructor(private store: Store) {}

  imgs: string[] = [
    '/assets/boardImgs/diagnostics_2023-07_1688990720_Vitamins+&+Supplements1.webp',
    '/assets/boardImgs/diagnostics_2023-07_1688990617_Nutritional+Drinks.webp',
    '/assets/boardImgs/diagnostics_2023-07_1688990653_Skin+Care.webp',
    '/assets/boardImgs/diagnostics_2023-11_1698833232_Cardiac+Care+(2).webp',
    '/assets/boardImgs/diagnostics_2023-07_1688990642_Ayurveda.webp',
    '/assets/boardImgs/diagnostics_2023-07_1688990685_Homeopathy.webp',
  ];

  links: string[] = [
    'Multivitamins',
    'Nutritional Drinks',
    'Body Lotions',
    'Blood Glucose Monitors',
    'Ayurvedic Immunity Boosters',
    'Homeopathy Medicines',
  ];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}
