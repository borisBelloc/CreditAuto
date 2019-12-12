import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BodyRoutingModule } from './body-routing.module';
import { TransionscreenComponent } from './transionscreen/transionscreen.component';
import { ConfigurationtauxComponent } from './configurationtaux/configurationtaux.component';


@NgModule({
  declarations: [TransionscreenComponent, ConfigurationtauxComponent],
  imports: [
    CommonModule,
    BodyRoutingModule
  ]
})
export class BodyModule { }
