import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { LoansimulateComponent } from './loansimulate/loansimulate.component';
import { SearchAndAddClientComponent } from './search-and-add-client/search-and-add-client.component';


@NgModule({
  declarations: [LoansimulateComponent, SearchAndAddClientComponent],
  exports: [
    LoansimulateComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
  ]
})
export class FormsModule { }
