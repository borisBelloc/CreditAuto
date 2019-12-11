import { NgModule } from '@angular/core';
// Warning : FormsModule & NgbModule used by Calendar !!
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';


import { CommonModule } from '@angular/common';
import { BodyRoutingModule } from './body-routing.module';

import { TransitionscreenComponent } from './transitionscreen/transitionscreen.component';
import { StatsComponent } from './stats/stats.component';

@NgModule({
  declarations: [TransitionscreenComponent, StatsComponent],
  imports: [
    CommonModule,
    BodyRoutingModule,
    NgbModule,
    FormsModule
  ]
})
export class BodyModule { }
