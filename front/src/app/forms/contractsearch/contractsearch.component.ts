import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
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
    if (this.searchContractForm.invalid) {
      return;
    }
    // stop here if form is invalid
    console.warn('Identifiant client -> ', formData);
  }

  // convenience getter for easy access to form fields (ex:f.amountPurchase)
  get f() {
    return this.searchContractForm.controls;
  }

  ngOnInit() {
    this.searchContractForm = this.formBuilder.group(
      {
        customerLastname: ['', [nameOrContractNumber]],
        customerFirstname: ['', [nameOrContractNumber]],
        customerContractNumber: ['']
      },
      {
        validator: [
          // RequiredEitherInput.requiredEither('customerEmail', 'customerLastname')
        ]
      }

    );
  }

  // Custom validator EXEMPLE A LIRE :
  // https://codecraft.tv/courses/angular/advanced-topics/basic-custom-validators/

  // https://angular.io/guide/form-validation

  // https://juristr.com/blog/2016/11/ng2-template-driven-form-validators/

  // https://codecraft.tv/courses/angular/advanced-topics/basic-custom-validators/

}
