import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationModule } from './navigation/navigation.module';
import { BodyModule } from './body/body.module';
// Router
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { LoansimulateComponent } from './forms/loansimulate/loansimulate.component';

// forms
import { FormsModule } from './forms/forms.module';
import { HomeComponent } from './body/home/home.component';



@NgModule({
  declarations: [
    AppComponent, HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BodyModule,
    NgbModule,
    NavigationModule,
    FormsModule,
    // Routing
    // Suprim AppRoutingModule + composant dans app.component.html (laisser que navbar car sur toutes les pages)
    // + supprim app-routing.module
    // RouterModule.forRoot([
    //   // { path: '', component: AppComponent },
    //   { path: '', redirectTo: 'simul', pathMatch: 'full' },
    //   { path: 'simul', component: LoansimulateComponent }
    //   // { path: 'shipping', component: ShippingComponent }
    // ])
  ],
  providers: [],
  bootstrap: [AppComponent, HomeComponent]
})
export class AppModule { }
