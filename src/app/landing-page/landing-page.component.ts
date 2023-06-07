import { Component, OnInit } from '@angular/core';
import { sliderType } from '../slider/slider.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  constructor() {}

  sliderOfType = sliderType;

  ngOnInit(): void {}
}
