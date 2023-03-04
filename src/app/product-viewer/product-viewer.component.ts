import { ThisReceiver } from '@angular/compiler';
import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-product-viewer',
  templateUrl: './product-viewer.component.html',
  styleUrls: ['./product-viewer.component.css'],
})
export class ProductViewerComponent {
  @Input() images!: string[];

  active: number = 0;
  mainImg!: string;

  constructor() {}

  onImgHover(i: number) {
    this.mainImg = this.images[i];
    this.active = i;
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.

    if (this.images) this.mainImg = this.images[0];
  }
}
