import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormsRoutingModule } from "./forms-routing.module";
import { LoansimulateComponent } from "./loansimulate/loansimulate.component";

//  IMPORTANT ! IMPORT REACTIVEFORMSMODULE !!
import { ReactiveFormsModule } from "@angular/forms";
import { CustomerComponent } from "./customer/customer.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [LoansimulateComponent, CustomerComponent],
  exports: [LoansimulateComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsRoutingModule,
    ReactiveFormsModule
  ]
})
export class FormsModule {}
