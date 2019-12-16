import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RequiredEitherInput } from '../validator/requiredEitherInput';
import { CustomerResearchService } from '../service/customer-research.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  query: string;

  searchForm: FormGroup;
  submitted = false;

  selectUserForm: FormGroup;

  serviceResponse: any;

  // import Router allow to use '*ngIf router' inside template
  constructor(
    public router: Router,
    private formBuilder: FormBuilder,
    private customerResearchService: CustomerResearchService
    ) {}

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

  onSubmit(formData) {
    this.submitted = true;
    // stop here if form is invalid
    if (this.searchForm.invalid) {
      return;
    }
    // console.warn('Identifiant client -> ', formData);

    this.customerResearchService
      .getCustomers(
        formData.customerLastname,
        formData.customerFirstname,
        formData.customerEmail,
      )
      .subscribe(response => {
        this.serviceResponse = response;
        console.log('reponse from request : ' , this.serviceResponse);
      },
      error => {
        console.log(error);
      }
    );

    this.selectUserForm = this.formBuilder.group({
      customer: ['']
    });
    console.log('selectUserForm : ', this.selectUserForm);

  }

  selectRadio(dd) {
    console.log('Id clicked -> ' + dd);
    // TODO: how to make the whole row select the radio btn ?
    // gender: ['male', [Validators.required]]
    // customer: ['1'];
  }

}
