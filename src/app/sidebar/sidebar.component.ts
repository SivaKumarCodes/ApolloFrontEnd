import { Component } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { dropdownOption } from '../navbar/navbar.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  rightIcon = faChevronRight;

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
