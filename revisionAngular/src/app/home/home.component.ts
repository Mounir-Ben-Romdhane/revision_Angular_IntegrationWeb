import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{


  public products:any =  [];
  public cards:any = [];

  constructor(private service: ProductServiceService,
    private router: Router){}
  ngOnInit(): void{
    this.service.getAllProductInCard().subscribe(
      (data) => {this.cards = data},
    );
    this.service.getAllProduct().subscribe(
      (respense) => {
        console.log("List product :", respense);
        this.products = respense;
      },
      (err) => {
        console.log('Error occured while fetching products');
      }
    );
  }

  GoToProductDetails(id: any) {
    this.router.navigate(['product/'+id]);
  }

  addCart(product: any) {
    if(this.cards.find((p: { id: any; }) => p.id === product.id)){
      alert(`Product ${product.id} is already in your cart!`);
    }else{
      this.service.addToCard(product).subscribe(
        ()=>{
          console.log('Produto adicionado com sucesso To Carto')
        }
      )
    }

  }
}
