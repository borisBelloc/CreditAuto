import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RequiredEitherInput } from '../validator/requiredEitherInput';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  query: string;

  searchForm: FormGroup;
  submitted = false;

  // import Router allow to use '*ngIf router' inside template
  constructor(public router: Router, private formBuilder: FormBuilder) {}

  onSubmit(formData) {
    this.submitted = true;
    // stop here if form is invalid
    if (this.searchForm.invalid) {
      return;
    }
    console.warn('Identifiant client -> ', formData);
  }

  // convenience getter for easy access to form fields (ex:f.amountPurchase)
  get f() {
    return this.searchForm.controls;
  }

  ngOnInit() {
    this.searchForm = this.formBuilder.group(
      {
        customerFirstname: [''],
        customerLastname: [''],
        customerEmail: ['', Validators.email]
      },
      {
        validator: [
          RequiredEitherInput.requiredEither(
            'customerEmail',
            'customerLastname'
          )
        ]
      }
    );
  }
}
