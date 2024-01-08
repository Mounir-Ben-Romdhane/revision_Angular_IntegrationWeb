import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-liste-product',
  templateUrl: './liste-product.component.html',
  styleUrls: ['./liste-product.component.css']
})
export class ListeProductComponent implements OnInit {
  products !: Product[];
  constructor(private service :ProjectService,
    private router : Router , 
    private activatedRouter : ActivatedRoute){}
    //ActivatedRoute ki yebda 3andeek parametre fel url bech trecuperiiih 

  ngOnInit(): void {
   this.getAllProduct();
  }


  getAllProduct(){
    this.service.GetAllProduct().subscribe(
      (data)=>{
        console.log(data);
        this.products = data 
      }
    )
  }
  GoToProductDetails(id:number){
    this.router.navigate(['product/'+id])
  }
  addProduct(){
    this.router.navigate(["product/add"])
  }
  deleteProduct(id:any){
    this.service.DeleteProduct(id).subscribe(()=>{
      this.getAllProduct();
    })
  }
  GoToUpdateProduct(id:any){
    this.router.navigate(["product/update/"+id])
  }
}
