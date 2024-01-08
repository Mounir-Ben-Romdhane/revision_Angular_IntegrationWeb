import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidenceComponent } from './core/workShop2/residence/residence.component';
import { ApartmentComponent } from './core/workShop2/apartment/apartment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ResidencesComponent } from './core/workShop4(ReactiveForm)/residences/residences.component';
import { FormResidenceComponent } from './core/workShop4(ReactiveForm)/form-residence/form-residence.component';
import { NotFoundComponent } from './core/workShop4(ReactiveForm)/not-found/not-found.component';
import { DetailAppartmentComponent } from './core/workShop4(ReactiveForm)/detail-appartment/detail-appartment.component';

@NgModule({
  declarations: [
    AppComponent,
    ResidenceComponent,
    ApartmentComponent,
    ResidencesComponent,
    FormResidenceComponent,
    NotFoundComponent,
    DetailAppartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
