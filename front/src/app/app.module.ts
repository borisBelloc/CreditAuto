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

// forms
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from './forms/forms.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BodyModule,
    NgbModule,
    NavigationModule,
    ReactiveFormsModule,
    FormsModule,
    // Routing
    // RouterModule.forRoot([
      // { path: '', component: AppComponent },
      // { path: 'shipping', component: ShippingComponent }
    // ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
