import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  slideIndx: number;
  marginLeft: number;
  checked: boolean[];
  imgs: string[] = [
    '/assets/carousel/kcdcsb5yrkpxok5bpm8y.webp',
    '/assets/carousel/kids_nutrition_deals.avif',
    '/assets/carousel/first3_web_pharmacy.avif',
    '/assets/carousel/glucometer_test_strips_deals.avif',
    '/assets/carousel/ca664d03-a01a-4889-be7f-ddb58477b0f9_1655293525.png',
  ];
  intervalId: any;

  @ViewChild('#slide') slide: any;
  constructor() {
    this.slideIndx = 0;
    this.checked = Array(this.imgs.length).fill(false);
    this.checked[this.slideIndx] = true;
    this.marginLeft = 0;

    this.intervalId = setInterval(() => {
      if (this.slideIndx >= 0 && this.slideIndx < this.imgs.length - 1)
        this.slideIndx++;
      else this.slideIndx = 0;

      this.onCheck(this.slideIndx);
    }, 10000);
  }

  onCheck(n: number) {
    for (let i = 0; i < this.checked.length; i++) this.checked[i] = false;
    this.checked[n] = true;
    this.slideIndx = n;
    this.marginLeft = n * 20;
    if (this.marginLeft == 0)
      document.documentElement.style.setProperty('--slide-margin', `0`);
    else
      document.documentElement.style.setProperty(
        '--slide-margin',
        `-${this.marginLeft}%`
      );
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    clearInterval(this.intervalId);
  }
}
