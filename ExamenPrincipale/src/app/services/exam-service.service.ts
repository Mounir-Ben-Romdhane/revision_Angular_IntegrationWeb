import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExamServiceService {

  urlCategory = "http://localhost:3000/category"
  constructor(private http : HttpClient) { }
}
