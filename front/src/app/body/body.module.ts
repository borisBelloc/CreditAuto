import { NgModule } from '@angular/core';
// Warning : FormsModule & NgbModule used by Calendar !!
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { BodyRoutingModule } from './body-routing.module';
import { TransionscreenComponent } from './transionscreen/transionscreen.component';
import { ConfigurationtauxComponent } from './configurationtaux/configurationtaux.component';

import { TransitionscreenComponent } from './transitionscreen/transitionscreen.component';
import { StatsComponent } from './stats/stats.component';

@NgModule({
  declarations: [TransionscreenComponent, StatsComponent],
  imports: [CommonModule, BodyRoutingModule, NgbModule, FormsModule,
    ReactiveFormsModule]
})
export class BodyModule { }
