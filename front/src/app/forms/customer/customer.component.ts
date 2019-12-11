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
