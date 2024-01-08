import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCategoryComponent } from '../list-category/list-category.component';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { UpdateCategoryComponent } from '../update-category/update-category.component';

const routes: Routes = [
  {path: "", component: ListCategoryComponent},
  {path: "addCategory", component: AddCategoryComponent},
  {path: "updateCategory/:id", component: UpdateCategoryComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
