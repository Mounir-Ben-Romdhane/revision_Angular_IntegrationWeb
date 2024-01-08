import { Component, OnInit } from '@angular/core';
import { Residence } from '../models/Residence';
import { ActivatedRoute, Router } from '@angular/router';
import { ApartmentService } from '../../workShop4(ReactiveForm)/services/Apartment/apartment.service';
import { Apartment } from '../models/Apartment';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.css']
})
export class ApartmentComponent{

  constructor(private router:Router,
    private route: ActivatedRoute,
    private service: ApartmentService){}

    listAp!:Apartment[];
     id!:number;
    listApp!: Apartment[];
    ngOnInit(): void {
       this.id = this.route.snapshot.params['id'];
      this.listAp = this.listApartments.filter(a => a.residence.id == this.id) ;
      this.service.getAllApp().subscribe(
        (res) => {
          console.log("res",res);
          this.listApp = res.filter(a => a.id == this.id);
          console.log(this.listApp);
        }
      );
    }



  listResidences:Residence[]=[
    {id:1,"name": "El fel","address":"Borj Cedria",
    "image":"../../assets/images/R1.jpeg"},
    {id:2,"name": "El yasmine",
    "address":"Ezzahra","image":"../../assets/images/R2.jpg"},
    {id:3,"name": "El Arij",
    "address":"Rades","image":"../../assets/images/R3.jpg"},
    {id:4,"name": "El Anber","address":"Manzah 5",
    "image":"../../assets/images/R4.jpg"}
    ];

  listApartments:Apartment[]=[
    {id:1,"appartNum":1,"floorNum":0,"surface":100,"terrace":"oui","surfaceTerrace":20,
    "category":"S+1","description":"Appartement S+1","residence":this.listResidences[0] },
    {id:2,"appartNum":2,"floorNum":0,"surface":130,"terrace":"non",
    "surfaceTerrace":0,"category":"S+2","description":"Appartement S+2",
    "residence":this.listResidences[0] },
    {id:3,"appartNum":3,"floorNum":0,"surface":150,"terrace":"oui","surfaceTerrace":30,
    "category":"S+3","description":"Appartement S+3","residence":this.listResidences[1] },
  ];

  detailAppart(id: any) {
    this.router.navigate(['apartment/'+id]);
  }

  deleteApp(id:number){
    this.service.deleteApartment(id).subscribe({
      next:() =>this.listApp=this.listApp.filter((a)=>a.id!=id)
      })
  }

  updateApp(id:number){
    this.router.navigate(['addResidence/'+id]);
  }

}
