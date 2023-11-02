import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-board',
  templateUrl: './mobile-board.component.html',
  styleUrls: ['./mobile-board.component.css'],
})
export class MobileBoardComponent {
  imgs: string[] = [
    '/assets/boardImgs/diagnostics_2023-07_1688990720_Vitamins+&+Supplements1.webp',
    '/assets/boardImgs/diagnostics_2023-07_1688990617_Nutritional+Drinks.webp',
    '/assets/boardImgs/diagnostics_2023-07_1688990653_Skin+Care.webp',
    '/assets/boardImgs/diagnostics_2023-11_1698833232_Cardiac+Care+(2).webp',
    '/assets/boardImgs/diagnostics_2023-07_1688990642_Ayurveda.webp',
    '/assets/boardImgs/diagnostics_2023-07_1688990685_Homeopathy.webp',
  ];

  links: string[] = ['D'];
}
