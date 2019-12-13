<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 9bd8cf7612fac4e588ed3c5b7ff7dfcc63d8d23c
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
  constructor(
    public router: Router,
    private formBuilder: FormBuilder
    ) {}

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
    this.searchForm = this.formBuilder.group({
      customerFirstname: [''],
      customerLastname: [''],
      customerEmail: ['', Validators.email],
    },
    {
      validator: [
        RequiredEitherInput.requiredEither('customerEmail', 'customerLastname')
      ]
    }
    );
  }

}
<<<<<<< HEAD
=======
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  query: string;

  // import Router allow to use '*ngIf router' inside template
  constructor(public router: Router) { }


  submit(searchUserForm: NgForm) {
    console.log('Le formulaire : ', searchUserForm);
  }




  ngOnInit() {
  }



}
>>>>>>> 56f3dac0e4e659d829df9e61b7e309c4df6cb249
=======
>>>>>>> 9bd8cf7612fac4e588ed3c5b7ff7dfcc63d8d23c
