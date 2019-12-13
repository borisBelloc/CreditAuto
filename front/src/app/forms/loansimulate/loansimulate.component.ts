<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 9bd8cf7612fac4e588ed3c5b7ff7dfcc63d8d23c
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
  //dataSimulate: string;
  //lastUpdate = new Date();
  //simulation: Simulation;
  simulateForm: FormGroup;
  response: any;
  submitted = false;
  isBtnsVisible = true;
  isEcheanceVisible = false;

  constructor(
    private formBuilder: FormBuilder,
    private simulationService: SimulationService
  ) {}

  ngOnInit() {
    this.simulateForm = this.formBuilder.group({
      amountPurchase: ['', Validators.required],
      amountLoan: ['', Validators.required],
      category: ['', Validators.required],
      durationLoan: ['', Validators.required]
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

    alert(
      'SUCCESS!! :-)\n\n' + JSON.stringify(this.simulateForm.value, null, 4)
    );

    // console.warn('FORM ICI -> ', formData);
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

    // this.simulateLoanContract.amountLoan = formData.amountLoan;
    // console.warn("TON OBJET ICI -> ", this.simulateLoanContract);
  }
  reset() {
    //  use this if loanCost is outside the form
    // this.simulateForm.enable();
    this.isBtnsVisible = true;
    this.isEcheanceVisible = false;
    //  use this if loanCost is inside the form
    this.simulateForm.get('amountPurchase').enable();
    this.simulateForm.get('amountLoan').enable();
    this.simulateForm.get('category').enable();
    this.simulateForm.get('durationLoan').enable();
  }

  echeance() {
    this.isEcheanceVisible = true;
  }
}
<<<<<<< HEAD
=======
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

  simulation: Simulation;

  isBtnsVisible = true;

  /**
   * Used to swap btn 'Calculer crédit' & 'Créer contrat'
   */
  toggleDisplayBtn() {
    this.isBtnsVisible = !this.isBtnsVisible;
  }

  constructor(
    private formBuilder: FormBuilder,
    private simulationService: SimulationService
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

  onSubmit(formData) {
    console.warn('FORM ICI -> ', formData);

    this.simulation = new Simulation(
      formData.amountPurchase,
      formData.amountLoan,
      formData.category,
      formData.durationLoan
    );

    this.simulationService.postSimulation(this.simulation);

    console.log(this.simulation);

    // if toggleDisplayBtn() used on html, it block the btn onSubmit (form)
    this.toggleDisplayBtn();
    this.simulateForm.disable();
    //this.simulateLoanContract.amountLoan = formData.amountLoan;
    //console.warn("TON OBJET ICI -> ", this.simulateLoanContract);
  }
  reset() {
    this.simulateForm.enable();
    this.toggleDisplayBtn();
    //  use this if loanCost is inside the form
    // this.simulateForm.get('amountPurchase').enable();
    // this.simulateForm.get('amountLoan').enable();
    // this.simulateForm.get('category').enable();
    // this.simulateForm.get('durationLoan').enable();
  }
}
>>>>>>> 56f3dac0e4e659d829df9e61b7e309c4df6cb249
=======
>>>>>>> 9bd8cf7612fac4e588ed3c5b7ff7dfcc63d8d23c
