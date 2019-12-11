import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BodyRoutingModule } from './body-routing.module';
import { TransitionscreenComponent } from './transitionscreen/transitionscreen.component';


@NgModule({
  declarations: [TransitionscreenComponent],
  imports: [
    CommonModule,
    BodyRoutingModule
  ]
})
export class BodyModule { }
