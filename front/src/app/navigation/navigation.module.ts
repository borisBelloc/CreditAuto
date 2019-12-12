import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NavigationRoutingModule } from './navigation-routing.module';



@NgModule({
  declarations: [NavbarComponent],
  exports : [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    NavigationRoutingModule
  ]
})
export class NavigationModule { }
