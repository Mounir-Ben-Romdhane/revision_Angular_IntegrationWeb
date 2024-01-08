import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Annonce } from '../models/annonce';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamenServiceService {
  urlAnnonces = "http://localhost:3000/annonces"
  constructor(private http : HttpClient) { }

  GetAllAnnonces():Observable<Annonce[]>{
    return this.http.get<Annonce[]>(this.urlAnnonces);
  }
}
