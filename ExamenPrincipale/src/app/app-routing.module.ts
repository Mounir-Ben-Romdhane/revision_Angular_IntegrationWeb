import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppComponent } from './app.component';

const routes: Routes = [

  /*{
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
