import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent {

  public product:any;

  constructor(private route:ActivatedRoute,
    private productService : ProductServiceService) {}

  ngOnInit(): void{
      let id = this.route.snapshot.params['id'];
      this.productService.getProductById(id).subscribe(
        (res) => {
          this.product = res;
        }
      );
  }
}
