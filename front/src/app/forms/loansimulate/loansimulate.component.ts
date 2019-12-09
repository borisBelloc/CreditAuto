import { Component, OnInit } from '@angular/core';

import { CreateloanService } from 'src/app/services/createloan.service';

// Angular's FormBuilder service provides convenient methods for generating controls (FORMS)
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-loansimulate',
  templateUrl: './loansimulate.component.html',
  styleUrls: ['./loansimulate.component.scss']
})
export class LoansimulateComponent implements OnInit {

  simulateForm;

  // Inject service to create Loan (forms)
  constructor(
    // private createLoanService: CreateloanService,
    private formBuilder: FormBuilder
  ) {

    this.simulateForm = this.formBuilder.group({
      amountPurchase: '',
      amountLoan: '',
      category: 'A',
      durationLoan: '',
      loanCost: ''
    });

  }

  onSubmit(formData) {
    console.warn('Your form has been submitted', formData);
    this.simulateForm.disable();
    // console.log('qqq ', formData.category);
  }
  reset()   {
    this.simulateForm.get('amountPurchase').enable();
    this.simulateForm.get('amountLoan').enable();
    this.simulateForm.get('category').enable();
    this.simulateForm.get('durationLoan').enable();
  }

  ngOnInit() {
  }
}
