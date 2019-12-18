import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-identification',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.scss']
})
export class IdentificationComponent implements OnInit {
  createDateForm: FormGroup;

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

}
