import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RatesService } from 'src/app/forms/service/rates.service';
import { Rate } from 'src/app/forms/class/rate';

@Component({
  selector: 'app-configurationtaux',
  templateUrl: './configurationtaux.component.html',
  styleUrls: ['./configurationtaux.component.scss']
})
export class ConfigurationtauxComponent implements OnInit {
  ratesForm: FormGroup;
  ratesArray: Rate[];
  submitted = false;


  constructor(
    private formBuilder: FormBuilder,
    private ratesService: RatesService
  ) {
    this.ratesForm = this.formBuilder.group({
        t1: [''],
        t2: [''],
        t3: [''],
        t4: [''],
        t5: [''],
        t6: [''],
    });

    this.ratesArray = new Array<Rate>();
  }

  ngOnInit() {
    this.ratesService
    .getRatesValue()
    .subscribe(
      response => {
        this.ratesArray = response;
      },
      error => {
        console.log(error);
      }

    );


  }
  onSubmit() {

    console.log(this.ratesArray);
    console.log(this.ratesForm.value.t1);
    console.log(this.ratesForm.value.t2);
    console.log(this.ratesForm.value.t3);
    console.log(this.ratesForm.value.t4);
    console.log(this.ratesForm.value.t5);
    console.log(this.ratesForm.value.t6);

    this.ratesArray[0].rateValue = this.ratesForm.value.t1;
    this.ratesArray[1].rateValue = this.ratesForm.value.t2;
    this.ratesArray[2].rateValue = this.ratesForm.value.t3;
    this.ratesArray[3].rateValue = this.ratesForm.value.t4;
    this.ratesArray[4].rateValue = this.ratesForm.value.t5;
    this.ratesArray[5].rateValue = this.ratesForm.value.t6;

    this.submitted = true;

    // stop here if form is invalid
    if (this.ratesForm.invalid) {
      return;
    }

    // alert();
    // SUCCESS!! :-)\n\n' + JSON.stringify(this.simulateForm.value, null, 4)

    // console.warn('FORM ICI -> ', formData);
    this.ratesService
      .putRatesValue(this.ratesArray
      ).subscribe(response => {
        this.ratesArray = response;
      });
  }

}



