import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { LoansimulateComponent } from './loansimulate/loansimulate.component';


@NgModule({
  declarations: [LoansimulateComponent],
  exports: [
    LoansimulateComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
  ]
})
export class FormsModule { }
