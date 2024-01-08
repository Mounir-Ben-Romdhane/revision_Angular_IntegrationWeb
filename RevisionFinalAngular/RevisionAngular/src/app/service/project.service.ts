import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  urlProduct  = "http://localhost:3000/product"
  urlCategory = "http://localhost:3000/category"
  constructor(private http : HttpClient) { }


  GetAllProduct():Observable<Product[]>{
    return this.http.get<Product[]>(this.urlProduct);
  }

  GetProductById(id:any):Observable<Product>{
    return this.http.get<Product>(this.urlProduct+"/"+id)
  }

  AddProduct(product :any){
    return this.http.post(this.urlProduct , product)
  }

  DeleteProduct(id:any){
    return this.http.delete(this.urlProduct+"/"+id)
  }

  UpdateProduct(id:number , product:Product){
    return this.http.put(this.urlProduct+"/"+id , product)
  }

  getAllCategory(): Observable<Category[]>{
    return this.http.get<Category[]>(this.urlCategory);
  }

  addCategory(category: any){
    return this.http.post(this.urlCategory, category);
  }

  getCategoryById(id: number):Observable<Category> {
    return this.http.get<Category>('http://localhost:3000/category/'+id);
  }

  updateCategory(id:any, category :Category){
    return this.http.put<Category>(this.urlCategory+"/"+id,category);
  }

  deleteCategory(id:number){
    return this.http.delete(this.urlCategory+"/"+id);
  }

}
