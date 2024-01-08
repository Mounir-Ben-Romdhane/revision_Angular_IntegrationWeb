import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent {

  show=false;

  category!: Category[];
  categoryToSelected!: Category;

  categories: Category[] = [];
  constructor(private service: ProjectService,
            private router: Router){}

  ngOnInit(): void {
    this.service.getAllCategory().subscribe(
      (res) => {
        console.log("Categories : ", res);
        this.categories = res ;
      }
    );
  }

  traitement(t:any){
    this.show=!this.show
  }

  changeTab(c:Category){
    this.show=false;
    for(let i=0;i<this.categories.length;i++){
      if(this.categories[i].id==c.id){
        this.categories[i]=c;
      }
    }
  }

  updateCat(c:Category){
    this.show=true;
  this.categoryToSelected=c;
  }

  goToUpdate(id: number){
      this.router.navigate(['/updateCategory/'+id]);
  }

  deleteCat(id: number){
    this.service.deleteCategory(id).subscribe({
      next:() => {
        this.categories=this.categories.filter((a)=>a.id!=id);
        alert('category deleted!!');
      }
    });
  }

}
