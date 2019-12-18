import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RatesService } from 'src/app/forms/service/rates.service';

@Component({
  selector: 'app-configurationtaux',
  templateUrl: './configurationtaux.component.html',
  styleUrls: ['./configurationtaux.component.scss']
})
export class ConfigurationtauxComponent implements OnInit {
  ratesForm: FormGroup;
  ratesArray: Array <any> [][];
  submitted = false;


  constructor(
    private formBuilder: FormBuilder,
    private ratesService: RatesService
  ) {
    this.ratesForm = formBuilder.group({
        t1: [''],
        t2: [''],
        t3: [''],
        t4: [''],
        t5: [''],
        t6: [''],
    });
  }




  ngOnInit() {
    this.ratesService
    .getRatesValue()
    .subscribe(
      response => {
        this.ratesArray = response as Array<any>[][];
      },
      error => {
        console.log(error);

      }

    );


  }
  onSubmit(formData) {

    console.log(this.ratesArray);
    console.log(this.ratesForm.value.t1);
    console.log(this.ratesForm.value.t2);
    console.log(this.ratesForm.value.t3);
    console.log(this.ratesForm.value.t4);
    console.log(this.ratesForm.value.t5);
    console.log(this.ratesForm.value.t6);


    this.ratesArray[0][1] = this.ratesForm.value.t1;
    this.ratesArray[1][1] = this.ratesForm.value.t2;
    this.ratesArray[2][1] = this.ratesForm.value.t3;
    this.ratesArray[3][1] = this.ratesForm.value.t4;
    this.ratesArray[4][1] = this.ratesForm.value.t5;
    this.ratesArray[5][1] = this.ratesForm.value.t6;

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
      );


  }

}



