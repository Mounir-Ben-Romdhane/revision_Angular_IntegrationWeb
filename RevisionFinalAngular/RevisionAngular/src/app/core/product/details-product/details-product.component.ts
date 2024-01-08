import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit{
  product !: Product ; 

  constructor(private service : ProjectService , private ac : ActivatedRoute){}
  ngOnInit(): void {
    this.getProductBYId();
  }


  getProductBYId(){
    this.service.GetProductById(this.ac.snapshot.params['id']).subscribe((data)=>{
      this.product = data ; 
    })
  }
}
