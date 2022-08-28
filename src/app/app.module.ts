import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { ChoiceBasketComponent } from './choices/choice-basket/pages/choice-basket.component';
import { ChoiceListComponent } from './choices/choice-list/pages/choice-list.component';
import { MapsComponent } from './maps/maps/maps.component';
import { HttpClientModule } from '@angular/common/http';
import { ChoiceTableComponent } from './choices/choice-table/choice-table.component';
import { DesignationComponent } from './dashboard/designation/pages/designation.component';
import { DesignationLocationComponent } from './dashboard/designation-locations/pages/designation-location.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './dashboard/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ChoiceListComponent,
    ChoiceBasketComponent,
    MapsComponent,
    ChoiceTableComponent,
    DesignationComponent,
    DesignationLocationComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    GoogleMapsModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
