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

  lastname: string;
  firstName: string;
  gender: string;
  AdresseClient: object;
  email: string;
  birthday: string;

  newClient: Client;

  constructor(
    private formBuilder: FormBuilder,
    private clientCreateService: ClientCreateService
  ) {}

  ngOnInit() {
    this.createClientForm = this.formBuilder.group({
      lastname: [''],
      firstName: [''],
      gender: [''],
      address: [''],
      city: [''],
      codePostal: [''],
      email: [''],
      birthday: ['']
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

    this.newClient = new Client(
      this.lastname,
      this.firstName,
      this.gender,
      this.AdresseClient,
      this.email,
      this.birthday
    );
    this.clientCreateService.createNewClient(this.newClient);
  }

  onReset() {
    this.submitted = false;
    this.createClientForm.reset();
  }
}
