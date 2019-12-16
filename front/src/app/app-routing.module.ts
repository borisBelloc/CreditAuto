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
import { ContractsearchComponent } from './forms/contractsearch/contractsearch.component';


const routes: Routes = [
  {path: '', redirectTo: 'home' , pathMatch: 'full'},
  {path: 'home' , component: HomeComponent},
  {path: 'login', component: IdentificationComponent},

  {path: 'transition' , component: TransionscreenComponent},

  { path: 'simulation', component: LoansimulateComponent },
  { path: 'statistiques', component: StatsComponent },

  { path: 'client', component: CustomerComponent },
  // TODO remove client2; used for test
  { path: 'client2', component: CustomerComponent },

  { path: 'createClient', component: CreateClientComponent},
  { path: 'contrat', component: ContractsearchComponent },
  {path: 'taux' , component: ConfigurationtauxComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
