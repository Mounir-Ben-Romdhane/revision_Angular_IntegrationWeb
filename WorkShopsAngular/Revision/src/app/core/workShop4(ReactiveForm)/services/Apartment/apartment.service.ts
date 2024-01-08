import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apartment } from 'src/app/core/workShop2/models/Apartment';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {
  apartmentUrl ='http://localhost:3000/appartements'
  constructor(private http: HttpClient) { }

  getAllApp():Observable<Apartment[]>{
    return this.http.get<Apartment[]>(this.apartmentUrl);
  }

  deleteApartment(id: number){
    return this.http.delete(this.apartmentUrl+"/"+id);
  }

  addAppartement(appartement:Apartment){
    return this.http.post('http://localhost:3000/appartements/',
    appartement);
  }

  fetchresidenceById(id:any){
    return this.http.get('http://localhost:3000/residences/'+id);
  }

  fetchappartementById(id:any){
    return this.http.get<Apartment>('http://localhost:3000/appartements/'+id);
    }

  updateAppartement(appartement:Apartment,id:any){
    return this.http.put('http://localhost:3000/appartements/'+id,
    appartement);
  }




}
