import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  query: string;

  searchForm: FormGroup;

  // import Router allow to use '*ngIf router' inside template
  constructor(
    public router: Router,
    private formBuilder: FormBuilder
    ) {}

  onSubmit(formData) {
    console.warn('Identifiant client -> ', formData);
  }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      customerFirstname: ['', Validators.required],
      customerLastname: ['', Validators.required]
    });
  }
}
