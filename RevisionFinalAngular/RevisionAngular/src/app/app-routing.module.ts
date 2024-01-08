import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeProductComponent } from './core/product/liste-product/liste-product.component';
import { AddProductComponent } from './core/product/add-product/add-product.component';
import { UpdateProductComponent } from './core/product/update-product/update-product.component';
import { DetailsProductComponent } from './core/product/details-product/details-product.component';
import { AnnoncesComponent } from './ExamenCSA/annonces/annonces.component';
import { ListAnnoncesComponent } from './ExamenCSA/list-annonces/list-annonces.component';
import { EstimationCoutComponent } from './ExamenCSA/estimation-cout/estimation-cout.component';

const routes: Routes = [
  /*{path:"listeProduct" , component:ListeProductComponent},
  {path:"add/product" , component:AddProductComponent},*/
  {path:"product",
    children:[
      {path:"" , component:ListeProductComponent},
      {path:"add" , component:AddProductComponent},
      {path:"update/:id" , component:UpdateProductComponent},
      {path:":id" , component:DetailsProductComponent}
    ]},
    {path: 'category',
      loadChildren: () => import('./core/category/category/category.module').then(c => c.CategoryModule)
    },
    {  path: 'annonces', component: AnnoncesComponent},
    {
      path: 'listAnnonces',
      component: ListAnnoncesComponent
    },
    {
      path: 'estimationCout',
      component: EstimationCoutComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
