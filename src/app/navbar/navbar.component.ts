import { Component, Host, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  host: {
    class: 'landing__page',
  },
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
