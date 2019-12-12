import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss']
})
export class CreateClientComponent implements OnInit {
  createClientForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createClientForm = this.formBuilder.group({
      name: [''],
      firstName: [''],
      genre: [''],
      address: [''],
      city: [''],
      codePostal: [''],
      email: [''],
      date: ['']
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.createClientForm.controls;
  }

  onSubmit(formData) {
    this.submitted = true;

    // stop here if form is invalid
    if (this.createClientForm.invalid) {
      return;
    }

    alert(
      'SUCCESS!! :-)\n\n' +
        JSON.stringify(this.createClientForm.value, null, 10)
    );
  }

  onReset() {
    this.submitted = false;
    this.createClientForm.reset();
  }
}
