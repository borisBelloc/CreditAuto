import { Component, OnInit } from "@angular/core";

// Angular's FormBuilder service provides convenient methods for generating controls (FORMS)
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Simulation } from "../class/simulation";
import { Observable, Subject, BehaviorSubject, merge } from "rxjs";
import { SimulationService } from "../service/simulation.service";

@Component({
  selector: "app-loansimulate",
  templateUrl: "./loansimulate.component.html",
  styleUrls: ["./loansimulate.component.scss"]
})
export class LoansimulateComponent implements OnInit {
  dataSimulate: string;
  lastUpdate = new Date();
  submitted = false;
  simulateForm: FormGroup;

  // Inject service to create Loan (forms)
  constructor(
    private formBuilder: FormBuilder,
    private simulationService: SimulationService
  ) {}

  ngOnInit() {
    this.simulateForm = this.formBuilder.group({
      amountPurchase: ["", Validators.required],
      amountLoan: ["", Validators.required],
      category: ["A", Validators.required],
      durationLoan: ["", Validators.required],
      loanCost: ["", Validators.required]
    });
  }

  // convenience getter for easy access to form fields (ex:f.amountPurchase)
  get f() {
    return this.simulateForm.controls;
  }

  onSubmit() {
    console.log(this.simulateForm.value);
    console.log(this.dataSimulate);
    this.submitted = true;

    this.simulationService.postSimulation(this.simulateForm.value);
    // stop here if form is invalid
    if (this.simulateForm.invalid) {
      return;
    }
  }

  reset() {
    console.log("rrr");
    // this.simulateForm.reset();
    //this.simulateForm.enable();
  }
  // this.simulateForm.disable();
}
