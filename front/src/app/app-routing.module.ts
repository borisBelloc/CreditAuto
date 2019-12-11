import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { LoansimulateComponent } from './forms/loansimulate/loansimulate.component';
import { CustomerComponent } from './forms/customer/customer.component';
import { HomeComponent } from './body/home/home.component';
import { IdentificationComponent } from './forms/identification/identification.component';


const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'home', component: HomeComponent },

  { path: 'login', component: IdentificationComponent },


  { path: 'simulation', component: LoansimulateComponent },

  { path: 'client', component: CustomerComponent },
  // TODO remove client2; used for test
  { path: 'client2', component: CustomerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
