import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeProductComponent } from './core/product/liste-product/liste-product.component';
import { AddProductComponent } from './core/product/add-product/add-product.component';
import { UpdateProductComponent } from './core/product/update-product/update-product.component';
import { DetailsProductComponent } from './core/product/details-product/details-product.component';
import { ListCategoryComponent } from './core/category/list-category/list-category.component';
import { AddCategoryComponent } from './core/category/add-category/add-category.component';
import { UpdateCategoryComponent } from './core/category/update-category/update-category.component';
import { DetailCategoryComponent } from './core/category/detail-category/detail-category.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryModule } from './core/category/category/category.module';
import { AnnoncesComponent } from './ExamenCSA/annonces/annonces.component';
import { ListAnnoncesComponent } from './ExamenCSA/list-annonces/list-annonces.component';
import { EstimationCoutComponent } from './ExamenCSA/estimation-cout/estimation-cout.component';
import { PageComponent } from './ExamenCSA/page/page.component';
@NgModule({
  declarations: [
    AppComponent,
    ListeProductComponent,
    AddProductComponent,
    UpdateProductComponent,
    DetailsProductComponent,
    ListCategoryComponent,
    AddCategoryComponent,
    UpdateCategoryComponent,
    DetailCategoryComponent,
    AnnoncesComponent,
    ListAnnoncesComponent,
    EstimationCoutComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CategoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
