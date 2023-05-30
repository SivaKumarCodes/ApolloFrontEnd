import { Component, ViewChild } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { PopUpStore } from '../popUpStore/popUp.store';
import { isSideBarActive } from '../popUpStore/popUp.selectors';
import { closeAll } from '../popUpStore/popUp.actions';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-pop-up-layer',
  templateUrl: './pop-up-layer.component.html',
  styleUrls: ['./pop-up-layer.component.css'],
})
export class PopUpLayerComponent {
  sidebar!: boolean;

  closePopUp() {
    this.state.dispatch(closeAll());
  }

  constructor(private state: Store) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.state.select(isSideBarActive).subscribe((data) => {
      this.sidebar = data;
    });
  }
}
