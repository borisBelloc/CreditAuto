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
  simulateForm: FormGroup;
  simulationResult: Simulation;

  response: any;
  submitted = false;
  isBtnsVisible = true;
  isEcheanceVisible = false;
  isTableVisible = false;

  constructor(
    private formBuilder: FormBuilder,
    private simulationService: SimulationService
  ) {}

  ngOnInit() {
    this.simulationResult = new Simulation(0, 0, 0, 0);
    this.simulateForm = this.formBuilder.group({
      amountPurchase: ['', [Validators.required, Validators.maxLength(6)]],
      amountLoan: ['', [Validators.required, Validators.maxLength(6)]],
      category: ['', Validators.required],
      durationLoan: ['', [Validators.required, Validators.max(3000)]]
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
    this.submitted = true;

    // stop here if form is invalid
    if (this.simulateForm.invalid) {
      return;
    }

    // alert();
    // SUCCESS!! :-)\n\n' + JSON.stringify(this.simulateForm.value, null, 4)

    // console.warn('FORM ICI -> ', formData);
    this.simulationService
      .getLoanValue(
        formData.category,
        formData.amountLoan,
        formData.durationLoan
      )
      .subscribe(
        response => {
          this.simulationResult = response as Simulation;
          console.log(this.simulationResult);
        },
        error => {
          console.log(error);
        }
      );

    // if toggleDisplayBtn() used on html, it block the btn onSubmit (form)
    // this.toggleDisplayBtn();
    this.isBtnsVisible = false;
    this.simulateForm.disable();

    // this.simulateLoanContract.amountLoan = formData.amountLoan;
    // console.warn("TON OBJET ICI -> ", this.simulateLoanContract);
  }
  reset() {
    //  use this if loanCost is outside the form
    // this.simulateForm.enable();
    this.isBtnsVisible = true;
    this.isEcheanceVisible = false;
    this.isTableVisible = false;
    //  use this if loanCost is inside the form
    this.simulateForm.get('amountPurchase').enable();
    this.simulateForm.get('amountLoan').enable();
    this.simulateForm.get('category').enable();
    this.simulateForm.get('durationLoan').enable();
  }

  echeance() {
    this.isEcheanceVisible = true;
    this.isTableVisible = true;
  }
}
