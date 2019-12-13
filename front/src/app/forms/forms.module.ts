import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormsRoutingModule } from "./forms-routing.module";
import { LoansimulateComponent } from "./loansimulate/loansimulate.component";

//  IMPORTANT ! IMPORT REACTIVEFORMSMODULE !!
import { ReactiveFormsModule } from "@angular/forms";
import { CustomerComponent } from "./customer/customer.component";
import { HttpClientModule } from "@angular/common/http";
import { CreateClientComponent } from './create-client/create-client.component';

@NgModule({
  declarations: [LoansimulateComponent, CustomerComponent, CreateClientComponent],
  exports: [LoansimulateComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsRoutingModule,
    ReactiveFormsModule
  ]
})
export class FormsModule {}