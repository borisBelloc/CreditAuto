import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationModule } from './navigation/navigation.module';
import { BodyModule } from './body/body.module';

// forms
import { HomeComponent } from './body/home/home.component';
import { IdentificationComponent } from './forms/identification/identification.component';
import { ConfigurationtauxComponent } from './body/configurationtaux/configurationtaux.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsModule as CustomFormsModule } from './forms/forms.module';
import { StatsComponent } from './body/stats/stats.component';



@NgModule({
  declarations: [
    AppComponent, HomeComponent, IdentificationComponent, ConfigurationtauxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BodyModule,
    NgbModule,
    NavigationModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule
    // Exemple Routing simplifié
    // RouterModule.forRoot([
    //   // { path: '', component: AppComponent },
    //   { path: '', redirectTo: 'simul', pathMatch: 'full' },
    //   { path: 'simul', component: LoansimulateComponent }
    //   // { path: 'shipping', component: ShippingComponent }
    // ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
