import { Component, OnInit } from '@angular/core';

import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  leftArrow = faChevronLeft;
  rigthArrow = faChevronRight;
  constructor() {}

  ngOnInit(): void {}
}
