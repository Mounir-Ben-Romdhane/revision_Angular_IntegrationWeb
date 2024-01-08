import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidenceComponent } from './core/workShop2/residence/residence.component';
import { ResidencesComponent } from './core/workShop4(ReactiveForm)/residences/residences.component';
import { FormResidenceComponent } from './core/workShop4(ReactiveForm)/form-residence/form-residence.component';
import { ApartmentComponent } from './core/workShop2/apartment/apartment.component';
import { NotFoundComponent } from './core/workShop4(ReactiveForm)/not-found/not-found.component';
import { DetailAppartmentComponent } from './core/workShop4(ReactiveForm)/detail-appartment/detail-appartment.component';

const routes: Routes = [
  {
    path: 'home',
    component: ResidencesComponent
  },
  {
    path: 'addResidence/:id',
    component: FormResidenceComponent
  },
  {
    path: 'apartments/:id',
    component: ApartmentComponent
  },
  {
    path: 'apartment/:id',
    component: DetailAppartmentComponent
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
