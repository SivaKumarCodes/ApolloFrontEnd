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
  intervalId!: ReturnType<typeof setTimeout>;

  @ViewChild('#slide') slide: any;
  constructor() {
    this.slideIndx = 0;
    this.checked = Array(this.imgs.length).fill(false);
    this.checked[this.slideIndx] = true;
    this.marginLeft = 0;
  }

  startInterval() {
    this.intervalId = setInterval(() => {
      if (this.slideIndx >= 0 && this.slideIndx < this.imgs.length - 1)
        this.slideIndx++;
      else this.slideIndx = 0;

      this.onCheck(this.slideIndx);
    }, 10000);
  }

  onCheck(n: number) {
    this.clearTimeOut();
    for (let i = 0; i < this.checked.length; i++) this.checked[i] = false;
    this.checked[n] = true;
    this.slideIndx = n;
    this.marginLeft = n * 20;
    this.setMargin();
    this.startInterval();
  }

  setMargin() {
    if (this.marginLeft == 0)
      document.documentElement.style.setProperty('--slide-margin', `0`);
    else
      document.documentElement.style.setProperty(
        '--slide-margin',
        `-${this.marginLeft}%`
      );
  }
  clearTimeOut() {
    clearInterval(this.intervalId);
  }

  onSwipeLeft(n: number) {
    this.clearTimeOut();
    for (let i in this.checked) this.checked[i] = false;

    if (n == this.imgs.length - 1) {
      this.checked[0] = true;
      this.slideIndx = 0;
      this.marginLeft = 0;
    } else {
      this.checked[n + 1] = true;
      this.slideIndx = n + 1;
      this.marginLeft = this.slideIndx * 20;
    }
    this.setMargin();
    this.startInterval();
  }

  onSwipeRight(n: number) {
    this.clearTimeOut();
    for (let i in this.checked) this.checked[i] = false;

    if (n == 0) {
      let lastSlide = this.imgs.length - 1;
      this.checked[lastSlide] = true;
      this.slideIndx = lastSlide;
      this.marginLeft = lastSlide * 20;
    } else {
      this.checked[n - 1] = true;
      this.slideIndx = n - 1;
      this.marginLeft = this.slideIndx * 20;
    }
    this.setMargin();
    this.startInterval();
  }

  ngOnInit(): void {
    this.startInterval();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.clearTimeOut();
  }
}
