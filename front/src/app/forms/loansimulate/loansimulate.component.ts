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
      loanCost: '' // Not writable input TODO: check how to copy it
    });

  }

  /**
   * @param customerData  users need to be able to submit the form data (their name and address)
   *  When the order is submitted, the form should reset and the cart should clear
   */
  onSubmit(formData) {
    console.warn('Your form has been submitted', formData);
    this.simulateForm.disable();

    // this.items = this.cartService.clearCart();
    // this.checkoutForm.reset();
  }

  ngOnInit() {
  }
}
