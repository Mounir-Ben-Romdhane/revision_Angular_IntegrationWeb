import { Component } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-show-shopping',
  templateUrl: './show-shopping.component.html',
  styleUrls: ['./show-shopping.component.css']
})
export class ShowShoppingComponent {
  public productInCard: any = [];

  constructor(private service: ProductServiceService){}

  ngOnInit(): void{
    this.service.getAllProductInCard().subscribe(
      (data) => {this.productInCard = data},
    );
  }
}
