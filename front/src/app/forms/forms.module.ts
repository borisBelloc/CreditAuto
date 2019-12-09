import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { LoansimulateComponent } from './loansimulate/loansimulate.component';

//  IMPORTANT ! IMPORT REACTIVEFORMSMODULE !!
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoansimulateComponent],
  exports: [
    LoansimulateComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    ReactiveFormsModule,
  ]
})
export class FormsModule { }
