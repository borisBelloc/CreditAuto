<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 9bd8cf7612fac4e588ed3c5b7ff7dfcc63d8d23c
import { NgModule } from '@angular/core';
// Warning : FormsModule & NgbModule used by Calendar !!
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';


import { CommonModule } from '@angular/common';
import { BodyRoutingModule } from './body-routing.module';
import { TransionscreenComponent } from './transionscreen/transionscreen.component';
import { ConfigurationtauxComponent } from './configurationtaux/configurationtaux.component';

import { TransitionscreenComponent } from './transitionscreen/transitionscreen.component';
import { StatsComponent } from './stats/stats.component';

@NgModule({
  declarations: [TransionscreenComponent, StatsComponent],
  imports: [
    CommonModule,
    BodyRoutingModule,
    NgbModule,
    FormsModule
  ]
})
export class BodyModule { }
<<<<<<< HEAD
=======
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BodyRoutingModule } from './body-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BodyRoutingModule
  ]
})
export class BodyModule { }
>>>>>>> 56f3dac0e4e659d829df9e61b7e309c4df6cb249
=======
>>>>>>> 9bd8cf7612fac4e588ed3c5b7ff7dfcc63d8d23c
