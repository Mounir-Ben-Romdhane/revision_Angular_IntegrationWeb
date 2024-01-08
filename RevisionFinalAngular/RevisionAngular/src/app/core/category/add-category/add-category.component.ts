import { Component } from '@angular/core';
import { Category } from 'src/app/models/category';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {

  category = new Category();

  constructor(private service: ProjectService){}

  addCat(){
    this.category.nbProduct = 0;

    this.service.addCategory(this.category).subscribe(
      () => {
        console.log('Category added !')
      }
    );
  }

}
