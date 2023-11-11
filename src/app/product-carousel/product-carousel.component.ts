import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { activeProduct } from '../store/app.selectors';
import { Product } from '../store/app.store';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.css'],
})
export class ProductCarouselComponent {
  product!: Product;
  imgsLength: number = 0;
  imgs: string[] = [];
  activeImage: number = 0;
  margin: number = 0;
  slideWidth: number = 0;

  constructor(private store: Store) {}

  swipeLeft() {
    if (this.activeImage < this.imgsLength - 1) {
      ++this.activeImage;
      this.margin = this.activeImage * 100;
    } else if (this.activeImage == this.imgsLength - 1) {
      this.activeImage = 0;
      this.margin = 0;
    }
  }

  swipeRight() {
    if (this.activeImage == 0) {
      this.activeImage = this.imgsLength - 1;
      this.margin = (this.imgsLength - 1) * 100;
    } else {
      --this.activeImage;
      this.margin = this.activeImage * 100;
    }
  }

  ngOnInit(): void {
    this.store.select(activeProduct).subscribe((p) => {
      this.product = p!;
      this.imgsLength = p?.variants[0].images.length!;
      this.imgs = p?.variants[0].images!;
    });

    this.slideWidth = (this.imgsLength * 100) / this.imgsLength;
  }
}
