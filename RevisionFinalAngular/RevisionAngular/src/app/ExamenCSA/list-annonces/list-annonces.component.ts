import { Component, OnInit } from '@angular/core';
import { Annonce } from '../models/annonce';
import { ExamenServiceService } from '../services/examen-service.service';

@Component({
  selector: 'app-list-annonces',
  templateUrl: './list-annonces.component.html',
  styleUrls: ['./list-annonces.component.css']
})
export class ListAnnoncesComponent {
  listAnnonces!: Annonce[];
  constructor(private service: ExamenServiceService){}

  ngOnInit(): void{
    this.service.GetAllAnnonces().subscribe(
      (res) => {
        console.log('res: ',res)
        this.listAnnonces = res;
      }
    );
  }

}
