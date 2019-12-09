import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { LoansimulateComponent } from './forms/loansimulate/loansimulate.component';


const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'accueil',
  //   pathMatch: 'full'
  //   }
  { path: '', redirectTo: 'simulation', pathMatch: 'full' },
  { path: 'simulation', component: LoansimulateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
