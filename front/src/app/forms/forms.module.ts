import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';

//  IMPORTANT ! IMPORT REACTIVEFORMSMODULE !!
import { ReactiveFormsModule } from '@angular/forms';
import { CustomerComponent } from './customer/customer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule as OfficialFormsModule } from '@angular/forms';

import { LoansimulateComponent } from './loansimulate/loansimulate.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { ContractsearchComponent } from './contractsearch/contractsearch.component';

@NgModule({
  declarations: [LoansimulateComponent, CustomerComponent, ContractsearchComponent, CreateClientComponent],
  exports: [LoansimulateComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    OfficialFormsModule,
    FormsRoutingModule,
    ReactiveFormsModule,
  ]
})
export class FormsModule {}
