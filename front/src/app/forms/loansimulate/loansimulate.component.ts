import { Component, OnInit } from '@angular/core';

import { SimulateLoanContract } from 'src/model/model-simulateloancontract';
// Angular's FormBuilder service provides convenient methods for generating controls (FORMS)
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SimulationService } from '../service/simulation.service';

@Component({
  selector: 'app-loansimulate',
  templateUrl: './loansimulate.component.html',
  styleUrls: ['./loansimulate.component.scss']
})
export class LoansimulateComponent implements OnInit {
  simulateLoanContract: SimulateLoanContract = new SimulateLoanContract();

  isBtnsVisible = true;

  dataSimulate: string;
  lastUpdate = new Date();
  submitted = false;
  simulateForm: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
  ) {}

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

  /**
   * DEPRECATED
   * No more used, check later to see if needed
   */
  toggleDisplayBtn() {
    this.isBtnsVisible = !this.isBtnsVisible;
  }


  onSubmit(formData) {
    console.warn('FORM ICI -> ', formData);
    // if toggleDisplayBtn() used on html, it block the btn onSubmit (form)
    // this.toggleDisplayBtn();
    this.isBtnsVisible = false;
    this.simulateForm.disable();

    this.simulateLoanContract.amountLoan = formData.amountLoan;
    console.warn('TON OBJET ICI -> ', this.simulateLoanContract);
  }
  reset() {
    this.simulateForm.enable();
    this.isBtnsVisible = true;
    //  use this if loanCost is inside the form
    // this.simulateForm.get('amountPurchase').enable();
    // this.simulateForm.get('amountLoan').enable();
    // this.simulateForm.get('category').enable();
    // this.simulateForm.get('durationLoan').enable();
  }
}
