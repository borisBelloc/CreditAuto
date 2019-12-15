import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { nameOrContractNumber } from '../validator/nameOrContractNumber';

@Component({
  selector: 'app-contractsearch',
  templateUrl: './contractsearch.component.html',
  styleUrls: ['./contractsearch.component.scss']
})
export class ContractsearchComponent implements OnInit {

  searchContractForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  onSubmit(formData) {
    this.submitted = true;
    if (this.searchContractForm.invalid) {
      return;
    }
    // stop here if form is invalid
    console.warn('Identifiant client -> ', formData);
  }

  // convenience getter for easy access to form fields (ex:f.amountPurchase)
  get f() {
    return this.searchContractForm.controls;
  }

  ngOnInit() {
    this.searchContractForm = this.formBuilder.group(
      {
        customerLastname: ['', [Validators.required]],
        customerFirstname: ['', [Validators.required]],
        customerContractNumber: [''],
        filterMethod: ['nameCustomer'],
      },

    );
    this.nameOrContractNumberValidators();

  }


  // TODO: ajout bouton radio ? [methode de recherche :: Nom/prenom || Contrat number
  // https://www.codementor.io/@jimohhadi/angular-validators-with-conditional-validation-in-reactive-forms-pj5z7gsq5
  // si nom§prenom -> disable contrat number ELSE inverse


  // Custom validator EXEMPLE A LIRE :
  // https://codecraft.tv/courses/angular/advanced-topics/basic-custom-validators/

  // https://angular.io/guide/form-validation

  // https://juristr.com/blog/2016/11/ng2-template-driven-form-validators/

  // https://codecraft.tv/courses/angular/advanced-topics/basic-custom-validators/

  // https://jasonwatmore.com/fr/post/2019/06/14/angular-8-exemple-de-validation-de-formulaires-reactifs-reactive-forms


  nameOrContractNumberValidators() {
    const customerLastname = this.searchContractForm.get('customerLastname');
    const customerFirstname = this.searchContractForm.get('customerFirstname');
    const customerContractNumber = this.searchContractForm.get('customerContractNumber');

    this.searchContractForm.get('filterMethod').valueChanges
      .subscribe(filterMethod => {

        // We dont need to change the validator required if we disable the input
        // It's only here as an exemple of what can be done
        if (filterMethod === 'numberContract') {
          customerContractNumber.setValidators([Validators.required]);
          customerLastname.setValidators(null);
          customerFirstname.setValidators(null);
          customerLastname.reset();
          customerLastname.disable();
          customerFirstname.reset();
          customerFirstname.disable();
          customerContractNumber.enable();
        }

        if (filterMethod === 'nameCustomer') {
          customerContractNumber.setValidators(null);
          customerLastname.setValidators([Validators.required]);
          customerFirstname.setValidators([Validators.required]);
          customerLastname.enable();
          customerFirstname.enable();
          customerContractNumber.disable();
          customerContractNumber.reset();
        }

        customerContractNumber.updateValueAndValidity();
        customerLastname.updateValueAndValidity();
        customerFirstname.updateValueAndValidity();
      });
  }


}
