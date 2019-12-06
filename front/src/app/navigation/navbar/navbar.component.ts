import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  logo: string;
  isCollapsed = true;

  constructor() {
    this.logo = 'assets/img/logo.png';
  }

  ngOnInit() {
  }

}
