import { Component, OnInit } from '@angular/core';

// Angular's FormBuilder service provides convenient methods for generating controls (FORMS)
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Simulation } from '../class/simulation';
import { Observable, Subject, BehaviorSubject, merge } from 'rxjs';
import { SimulationService } from '../service/simulation.service';

@Component({
  selector: 'app-loansimulate',
  templateUrl: './loansimulate.component.html',
  styleUrls: ['./loansimulate.component.scss']
})
export class LoansimulateComponent implements OnInit {
  dataSimulate: string;
  lastUpdate = new Date();
  submitted = false;
  simulateForm: FormGroup;
  response: any;
  simulation: Simulation;
  isBtnsVisible = true;


  constructor(
    private formBuilder: FormBuilder,
    private simulationService: SimulationService,
  ) {}

  ngOnInit() {
    this.simulateForm = this.formBuilder.group({
      amountPurchase: ['', Validators.required],
      amountLoan: ['', Validators.required],
      category: ['A', Validators.required],
      durationLoan: ['', Validators.required],
      loanCost: ['']
    });
  }

  // convenience getter for easy access to form fields (ex:f.amountPurchase)
  get f() {
    return this.simulateForm.controls;
  }

  /**
   * DEPRECATED
   * No more used, check later to see if needed
   */
  toggleDisplayBtn() {
    this.isBtnsVisible = !this.isBtnsVisible;
  }


  onSubmit(formData) {
    //console.warn('FORM ICI -> ', formData);
    this.simulationService
      .getLoanValue(
        formData.category,
        formData.amountLoan,
        formData.durationLoan
      )
      .subscribe(
        response => {
          this.response = response;
          console.log(this.response);
        },
        error => {
          console.log(error);
        }
      );

    // if toggleDisplayBtn() used on html, it block the btn onSubmit (form)
    // this.toggleDisplayBtn();
    this.isBtnsVisible = false;
    this.simulateForm.disable();

    //this.simulateLoanContract.amountLoan = formData.amountLoan;
    //console.warn("TON OBJET ICI -> ", this.simulateLoanContract);
  }
  reset() {
    //  use this if loanCost is outside the form
    // this.simulateForm.enable();
    this.isBtnsVisible = true;
    //  use this if loanCost is inside the form
    this.simulateForm.get('amountPurchase').enable();
    this.simulateForm.get('amountLoan').enable();
    this.simulateForm.get('category').enable();
    this.simulateForm.get('durationLoan').enable();
  }
}
