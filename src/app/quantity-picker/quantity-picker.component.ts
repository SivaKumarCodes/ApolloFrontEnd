import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-quantity-picker',
  templateUrl: './quantity-picker.component.html',
  styleUrls: ['./quantity-picker.component.css'],
})
export class QuantityPickerComponent {
  @Input() showup!: boolean;
  @Input() start!: number;
  @Output() change: EventEmitter<number> = new EventEmitter();
  @Output() close: EventEmitter<void> = new EventEmitter();

  selection: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  selected: number = 2;

  changeSelection(i: number) {
    this.selected = i;
  }

  onClose() {
    this.close.emit();
  }

  done() {
    this.change.emit(this.selected);
  }
}
