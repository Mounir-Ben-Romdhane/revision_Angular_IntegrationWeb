import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ShowShoppingComponent } from './show-shopping/show-shopping.component';
import { DetailProductComponent } from './detail-product/detail-product.component';

const routes: Routes = [
  {path: 'home' , component:HomeComponent},
  {path: 'addProduct', component: AddProductComponent},
  {path: 'showShopping', component:ShowShoppingComponent},
  {path: 'product/:id', component:DetailProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
