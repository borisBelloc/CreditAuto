<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 9bd8cf7612fac4e588ed3c5b7ff7dfcc63d8d23c
import { TransionscreenComponent } from './body/transionscreen/transionscreen.component';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { LoansimulateComponent } from './forms/loansimulate/loansimulate.component';
import { CustomerComponent } from './forms/customer/customer.component';
import { HomeComponent } from './body/home/home.component';
import { IdentificationComponent } from './forms/identification/identification.component';
import { ConfigurationtauxComponent } from './body/configurationtaux/configurationtaux.component';
import { StatsComponent } from './body/stats/stats.component';
import { CreateClientComponent } from './forms/create-client/create-client.component';


const routes: Routes = [
  {path: '', redirectTo: 'home' , pathMatch: 'full'},
  {path: 'home' , component: HomeComponent},
  {path: 'login', component: IdentificationComponent},
  {path: 'transition' , component: TransionscreenComponent},
  {path: 'taux' , component: ConfigurationtauxComponent},
  // {
  //   path: '',
  //   redirectTo: 'accueil',
  //   pathMatch: 'full'
  //   }
 // { path: '', redirectTo: 'simulation', pathMatch: 'full' },
  { path: 'simulation', component: LoansimulateComponent },
  { path: 'statistiques', component: StatsComponent },

  { path: 'client', component: CustomerComponent },
  // TODO remove client2; used for test
  { path: 'client2', component: CustomerComponent },

  { path: 'createClient', component: CreateClientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
<<<<<<< HEAD
=======
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { LoansimulateComponent } from './forms/loansimulate/loansimulate.component';
import { CustomerComponent } from './forms/customer/customer.component';


const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'accueil',
  //   pathMatch: 'full'
  //   }
  { path: '', redirectTo: 'simulation', pathMatch: 'full' },
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
>>>>>>> 56f3dac0e4e659d829df9e61b7e309c4df6cb249
=======
>>>>>>> 9bd8cf7612fac4e588ed3c5b7ff7dfcc63d8d23c
