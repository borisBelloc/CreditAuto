import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClientCreateService } from '../service/client-create.service';
import { Client } from '../class/client';
import { Observable } from 'rxjs';
import { AdresseClient } from '../class/adresse-client';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss']
})
export class CreateClientComponent implements OnInit {
  createClientForm: FormGroup;
  submitted = false;
  data: Observable<Client>;
  lastName: string;
  firstName: string;
  gender: string;
  address: string;
  email: string;
  birthdate: string;
  zipCode: number;
  city: string;

  newClient: Client;
  newAddress: AdresseClient;

  constructor(
    private formBuilder: FormBuilder,
    private clientCreateService: ClientCreateService
  ) {}

  ngOnInit() {
    this.createClientForm = this.formBuilder.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      gender: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      zipCode: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      birthdate: ['', Validators.required]
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
    this.city = this.f.city.value;
    this.zipCode = this.f.zipCode.value;
    this.email = this.f.email.value;
    this.birthdate = this.f.birthdate.value;

    this.newAddress = new AdresseClient(this.address, this.zipCode, this.city);

    this.newClient = new Client(
      this.lastName,
      this.firstName,
      this.gender,
      this.newAddress,
      this.email,
      this.birthdate
    );

    console.log(JSON.stringify(this.newClient));

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
