import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClientCreateService } from '../service/client-create.service';
import { Client } from '../class/client';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss']
})
export class CreateClientComponent implements OnInit {
  createClientForm: FormGroup;
  submitted = false;

  lastName: string;
  firstName: string;
  gender: string;
  address: object;
  email: string;
  birthdate: string;

  newClient: Client;

  constructor(
    private formBuilder: FormBuilder,
    private clientCreateService: ClientCreateService
  ) {}

  ngOnInit() {
    this.createClientForm = this.formBuilder.group({
      lastName: [''],
      firstName: [''],
      gender: [''],
      address: [''],
      city: [''],
      zipCode: [''],
      email: [''],
      birthdate: ['']
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

    this.lastName = this.f.lastName.value;
    this.firstName = this.f.firstName.value;
    this.gender = this.f.gender.value;
    this.address = this.f.address.value;
    this.email = this.f.email.value;
    this.birthdate = this.f.birthdate.value;

    this.newClient = new Client(
      this.lastName,
      this.firstName,
      this.gender,
      this.address,
      this.email,
      this.birthdate
    );

    console.log(this.newClient);

    this.clientCreateService.createNewClient(this.newClient).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }

  onReset() {
    this.submitted = false;
    this.createClientForm.reset();
  }
}
