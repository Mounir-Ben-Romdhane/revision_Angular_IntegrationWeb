import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent{

  @Input()categoryy : Category = {};
  @Output()notif=new EventEmitter();
  @Output()updateCategory=new EventEmitter();

  category= new Category();
  id!: number;

  constructor(private route: ActivatedRoute,
    private service:ProjectService,
    private router: Router){}

  ngOnInit(): void {
    console.log("category: ",this.categoryy);
    // this.id = this.route.snapshot.params['id'];
    /* this.service.getCategoryById(this.id).subscribe(
      (res) => {
        this.category = res ;
      }
     );*/
  }

  updateCat(){
    this.service.updateCategory(this.categoryy.id,this.categoryy).subscribe(
      () => {
        alert("La categoría ha sido actualizada correctamente");
        this.router.navigate(['category']);
        window.location.reload();
      }
    );
  }



}
