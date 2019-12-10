import { Component, OnInit } from "@angular/core";

// Angular's FormBuilder service provides convenient methods for generating controls (FORMS)
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Simulation } from "../class/simulation";
import { Observable, Subject, BehaviorSubject, merge } from 'rxjs';

import { LoanCalculService } from '../service/loan-calcul.service';

@Component({
  selector: "app-loansimulate",
  templateUrl: "./loansimulate.component.html",
  styleUrls: ["./loansimulate.component.scss"]
})

export class LoansimulateComponent implements OnInit {
  lastUpdate = new Date();
  simulation: Simulation = new Simulation();
  submitted = false;
  simulateForm: FormGroup;


  // Inject service to create Loan (forms)
  constructor(private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.simulateForm = this.formBuilder.group({
      amountPurchase: ['', Validators.required],
      amountLoan: ['', Validators.required],
      category: ['A', Validators.required],
      durationLoan: ['', Validators.required],
      loanCost: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields (ex:f.amountPurchase)
  get f() {
    return this.simulateForm.controls;
  }

  onSubmit() {
    console.log(this.simulateForm.value);

    this.submitted = true;

    // stop here if form is invalid
    if (this.simulateForm.invalid) {
      return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.simulateForm.value, null, 4));

  }

  reset() {
    console.log("rrr");
    // this.simulateForm.reset();
    //this.simulateForm.enable();
  }
  // this.simulateForm.disable();

}
