import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { nameOrContractNumber } from '../validator/nameOrContractNumber';

@Component({
  selector: 'app-contractsearch',
  templateUrl: './contractsearch.component.html',
  styleUrls: ['./contractsearch.component.scss']
})
export class ContractsearchComponent implements OnInit {

  searchContractForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  onSubmit(formData) {
    this.submitted = true;
    // stop here if form is invalid
    if (this.searchContractForm.invalid) {
      return;
    }
    console.warn('Identifiant client -> ', formData);
  }

  // convenience getter for easy access to form fields (ex:f.amountPurchase)
  get f() {
    return this.searchContractForm.controls;
  }

  ngOnInit() {
    this.searchContractForm = this.formBuilder.group(
      {
        // That's how you would call the custom form validator
        // customerLastname: ['', [ nameOrContractNumber]],
        customerLastname: ['', [Validators.required]],
        customerFirstname: ['', [Validators.required]],
        customerContractNumber: new FormControl({ value: '', disabled: true}),
        filterMethod: ['nameCustomer'],
      },

    );
    this.nameOrContractNumberValidators();
  }

  // Form Validator
  nameOrContractNumberValidators() {
    const customerLastname = this.searchContractForm.get('customerLastname');
    const customerFirstname = this.searchContractForm.get('customerFirstname');
    const customerContractNumber = this.searchContractForm.get('customerContractNumber');

    this.searchContractForm.get('filterMethod').valueChanges
      .subscribe(filterMethod => {

        // We dont need to change the validator 'required' if we disable the input
        // It's only here as an exemple of what can be done
        if (filterMethod === 'numberContract') {
          customerContractNumber.setValidators([Validators.required]);
          customerLastname.setValidators(null);
          customerFirstname.setValidators(null);
          customerLastname.reset();
          customerLastname.disable();
          customerFirstname.reset();
          customerFirstname.disable();
          customerContractNumber.enable();
          }

        if (filterMethod === 'nameCustomer') {
          customerContractNumber.setValidators(null);
          customerLastname.setValidators([Validators.required]);
          customerFirstname.setValidators([Validators.required]);
          customerLastname.enable();
          customerFirstname.enable();
          customerContractNumber.disable();
          customerContractNumber.reset();
        }

        customerContractNumber.updateValueAndValidity();
        customerLastname.updateValueAndValidity();
        customerFirstname.updateValueAndValidity();
      });
  }


}
