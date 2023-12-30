import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private url = "http://localhost:3000/products";
  private urlCard = "http://localhost:3000/card"
  constructor(private http: HttpClient) { }

  addProduct(product: any) {
    return this.http.post(this.url, product);
  }

  getAllProduct():Observable<any>{
    return this.http.get<any>(this.url);
  }

  getProductById(id:any){
    return this.http.get(this.url+'/'+id);
  }

  addToCard(product: any){
    return this.http.post(this.urlCard,product);
  }

  getAllProductInCard():Observable<any>{
    return this.http.get<any>(this.urlCard);
  }



}
