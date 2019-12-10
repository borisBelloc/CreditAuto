import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  // import Router allow to use '*ngIf router' inside template
  constructor(public router: Router) { }

  ngOnInit() {
  }

}
