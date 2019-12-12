import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contractsearch',
  templateUrl: './contractsearch.component.html',
  styleUrls: ['./contractsearch.component.scss']
})
export class ContractsearchComponent implements OnInit {

  searchContractForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  onSubmit(formData) {
    console.warn('Identifiant client -> ', formData);
  }

  // convenience getter for easy access to form fields (ex:f.amountPurchase)
  get f() {
    return this.searchContractForm.controls;
  }

  ngOnInit() {
    this.searchContractForm = this.formBuilder.group({
      customerLastname: [''],
      customerFirstname: [''],
      customerContractNumber: [''],
    });
  }
}
