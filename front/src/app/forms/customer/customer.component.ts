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
  customerId: number;

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
        formData.customerEmail
      )
<<<<<<< HEAD
      .subscribe(
        response => {
          this.serviceResponse = response;
          console.log('reponse from request : ', this.serviceResponse);
          console.log('Client 1 ->', this.serviceResponse[1]);
        },
        error => {
          console.log(error);
        }
      );
=======
      .subscribe(response => {
        this.serviceResponse = response;
        console.log('reponse from request : ' , this.serviceResponse);
        // console.log('Client 1 ->' , this.serviceResponse[1]);
      },
      error => {
        console.log(error);
      }
    );
>>>>>>> 78008012a73dc3c4b452da97b2847d67135a2af9
  }

  selectRadio(radioId) {
    this.customerId = radioId;
    console.log('radio selected -> ', this.customerId);
  }

  linkUserToContract() {
    // TODO:  faire REQUETTE POST -> add client to contract
<<<<<<< HEAD
    console.log('CLIENT WANTED :: ', this.serviceResponse[this.customerId - 1]);
=======

    let wantedCustomer;
    wantedCustomer = this.serviceResponse.find(customer => customer.id === this.customerId);
    console.log('CLIENT WANTED :: -> ', wantedCustomer);
>>>>>>> 78008012a73dc3c4b452da97b2847d67135a2af9
  }
}
