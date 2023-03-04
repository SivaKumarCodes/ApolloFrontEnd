import { Component, EventEmitter, Host, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  host: {
    class: 'landing__page',
  },
})
export class NavbarComponent implements OnInit {
  @Output() dropdown = new EventEmitter<boolean>();
  navbarOptions: string[] = [
    'Vitamins & Nutriton',
    'Healthcare Devices',
    'Personal Care',
    'Ayurveda Products',
    'Homeopathy',
  ];

  constructor() {}

  showDropDown(value: boolean) {
    this.dropdown.emit(value);
  }

  ngOnInit(): void {}
}
