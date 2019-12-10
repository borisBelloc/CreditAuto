import { Component, OnInit } from "@angular/core";

import { CreateloanService } from "src/app/services/createloan.service";

// Angular's FormBuilder service provides convenient methods for generating controls (FORMS)
import { FormBuilder } from "@angular/forms";
import { Simulation } from "../class/simulation";
import { LoanCalculService } from "../service/loan-calcul.service";

@Component({
  selector: "app-loansimulate",
  templateUrl: "./loansimulate.component.html",
  styleUrls: ["./loansimulate.component.scss"]
})
export class LoansimulateComponent implements OnInit {
  lastUpdate = new Date();
  simulation: Simulation = new Simulation();
  submitted = false;

  simulateForm;

  // Inject service to create Loan (forms)
  constructor() { };

  newEmployee(): void {
    this.submitted = false;
  }

  onSubmit() {
    this.submitted = true;
    //console.warn("Your form has been submitted", formData);
    //this.simulateForm.disable();
    // this.items = this.cartService.clearCart();
    //console.log('qqq ', formData.category);
  }

  reset() {
    console.log("rrr");
    // this.simulateForm.reset();
    this.simulateForm.enable();
  }
  // this.simulateForm.disable();

  ngOnInit() { }
}
