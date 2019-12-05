import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NavbardisplayService } from '../services/navbardisplay.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isCollapsed = true;
  navbarDisplay: Observable<boolean>;

  // Service ne sert que pour masquer la navbar ?
  // appel du service (injection)
  // constructor(private navbardisplayService: NavbardisplayService) { }
  constructor() { }

  ngOnInit() {
    // this.navbarDisplay = this.navbardisplayService.onChangeDisplay();
  }

  // toto(){
  //   console.log('aaaa');
  //   this.isCollapsed = !this.isCollapsed;
  // }

}
