import { Component, EventEmitter, Input, Output } from '@angular/core';
import { dropdownOption } from '../navbar/navbar.component';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent {
  @Input() isVisible!: boolean;

  @Input() options!: dropdownOption[];

  @Input() activeNav!: number;

  @Output() setactive: EventEmitter<number> = new EventEmitter();

  @Output() setAllinactive: EventEmitter<void> = new EventEmitter();

  setVisible({ value }: { value: boolean }) {
    this.isVisible = value;
    this.setactive.emit(this.activeNav);
    this.setAllinactive.emit();
  }
}
