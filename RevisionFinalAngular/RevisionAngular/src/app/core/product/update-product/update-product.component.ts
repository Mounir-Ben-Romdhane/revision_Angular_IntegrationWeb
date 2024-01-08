import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
  ProductForm !: FormGroup;
  id !: number;
  product !: Product;
  constructor(private fb: FormBuilder, private service: ProjectService,
    private router: Router, private activatedRouter: ActivatedRoute) { }
  ngOnInit(): void {
    this.ProductForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      description: ['', [Validators.required,
      Validators.minLength(5), Validators.maxLength(10)]],
      price: ['', [Validators.required, Validators.pattern('^[0-9]+')]],
      qte: ['', [Validators.required, Validators.pattern('^[0-9]+')]],
      category: ['', Validators.required]
    })
    this.id = this.activatedRouter.snapshot.params['id'];
    this.service.GetProductById(this.id).subscribe((d) => {
      this.product = d;
      this.ProductForm.patchValue(this.product);
    });

  }


  updateProduct(){
    this.service.UpdateProduct(this.activatedRouter.snapshot.params["id"],this.ProductForm.value).subscribe(()=>{
      console.log("product updated successfully ");
      this.router.navigate(['/product'])
      
    })
  }
}
