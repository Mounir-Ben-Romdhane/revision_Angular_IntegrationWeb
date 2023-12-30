import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{

public productForm!: FormGroup;

constructor(private fb: FormBuilder,
  private service: ProductServiceService){}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      nameProduct: ['',Validators.required],
      price: ['',Validators.pattern("[0-9]+")],
      description: ['', Validators.minLength(10)]
    })
  }

  addProduct() {
    if(this.productForm.valid){
      this.service.addProduct(this.productForm.value).subscribe(
        () => {
          this.productForm.reset();
          alert('Produto adicionado com sucesso');
        }
      )
    }
    }

}
