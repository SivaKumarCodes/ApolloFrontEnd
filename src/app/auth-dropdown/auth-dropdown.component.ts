import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-auth-dropdown',
  templateUrl: './auth-dropdown.component.html',
  styleUrls: ['./auth-dropdown.component.css'],
})
export class AuthDropdownComponent {
  @Output() toggle = new EventEmitter<boolean>();

  setVisible() {
    this.toggle.emit(true);
  }

  setLeave() {
    this.toggle.emit(false);
  }
}
