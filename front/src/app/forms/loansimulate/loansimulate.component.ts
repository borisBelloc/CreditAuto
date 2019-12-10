import { Component, OnInit } from '@angular/core';

import { CreateloanService } from 'src/app/services/createloan.service';

// Angular's FormBuilder service provides convenient methods for generating controls (FORMS)
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { SimulateLoanContract } from 'src/model/model-simulateloancontract';


@Component({
  selector: 'app-loansimulate',
  templateUrl: './loansimulate.component.html',
  styleUrls: ['./loansimulate.component.scss']
})
export class LoansimulateComponent implements OnInit {

  simulateForm;
  simulateLoanContract: SimulateLoanContract = new SimulateLoanContract();

  isBtnsVisible = true;

  /**
   * Used to swap btn 'Calculer crédit' & 'Créer contrat'
   */
  toggleDisplayBtn() {
    this.isBtnsVisible = !this.isBtnsVisible;
  }

  constructor(
    private formBuilder: FormBuilder
  ) {

    this.simulateForm = this.formBuilder.group({
      amountPurchase: '',
      amountLoan: '',
      category: 'A',
      durationLoan: '',
      // loanCost: '' // valeur qui n'est pas récupéré dans le front
    });

  }

  onSubmit(formData) {
    console.warn('FORM ICI -> ', formData);
    // if toggleDisplayBtn() used on html, it block the btn onSubmit (form)
    this.toggleDisplayBtn();
    this.simulateForm.disable();

    this.simulateLoanContract.amountLoan = formData.amountLoan;
    console.warn('TON OBJET ICI -> ', this.simulateLoanContract);
  }
  reset()   {
    this.simulateForm.enable();
    //  use this if loanCost is inside the form
    // this.simulateForm.get('amountPurchase').enable();
    // this.simulateForm.get('amountLoan').enable();
    // this.simulateForm.get('category').enable();
    // this.simulateForm.get('durationLoan').enable();
  }

  ngOnInit() {
  }
}
