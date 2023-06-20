import { Component, EventEmitter, Input, Output } from '@angular/core';
import { dropdownOption } from '../navbar/navbar.component';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadProductGrid } from '../store/app.actions';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent {
  constructor(private router: Router, private store: Store) {}

  @Input() isVisible!: boolean;

  @Input() options!: dropdownOption[];

  @Input() activeNav!: number;

  @Output() setactive: EventEmitter<{ ind: number; flag: boolean }> =
    new EventEmitter();

  @Output() setAllinactive: EventEmitter<void> = new EventEmitter();

  setVisible({ value }: { value: boolean }) {
    this.isVisible = value;
    this.setactive.emit({ ind: this.activeNav, flag: value });
    this.setAllinactive.emit();
  }

  follow(value: boolean, option: string) {
    this.setVisible({ value: false });
    this.router.navigate(['/products/'], { queryParams: { type: option } });
  }
}
