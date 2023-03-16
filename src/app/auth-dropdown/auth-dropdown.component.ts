import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getAuthSucess, getUser } from '../authStore/auth.selectors';
import { Auth, User } from '../authStore/auth.store';

import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-auth-dropdown',
  templateUrl: './auth-dropdown.component.html',
  styleUrls: ['./auth-dropdown.component.css'],
})
export class AuthDropdownComponent {
  @Output() toggle = new EventEmitter<boolean>();

  penicon = faChevronRight;

  authState$!: Observable<boolean>;

  user$!: Observable<User>;

  setVisible() {
    this.toggle.emit(true);
  }

  setLeave() {
    this.toggle.emit(false);
  }

  constructor(private store: Store) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.authState$ = this.store.select(getAuthSucess);
    this.user$ = this.store.select(getUser!) as Observable<User>;
  }
}
