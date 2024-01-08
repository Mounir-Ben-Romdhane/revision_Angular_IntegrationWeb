import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ApartmentService } from '../services/Apartment/apartment.service';
import { Apartment } from 'src/app/core/workShop2/models/Apartment';

@Component({
  selector: 'app-form-residence',
  templateUrl: './form-residence.component.html',
  styleUrls: ['./form-residence.component.css']
})
export class FormResidenceComponent implements OnInit{

  id!:number;
  apartForm!: FormGroup;
  validSurface:boolean=false;
  appartement!: Apartment;

  constructor(private route:ActivatedRoute,
    private formBuilder: FormBuilder,
    private router:Router,
    private service: ApartmentService){}

  ngOnInit(): void {

    this.apartForm = this.formBuilder.group({
      appartNum: ['', [Validators.required, Validators.pattern('^[0-9]$')]],
      floorNum: ['', [Validators.required, Validators.pattern('^[0-9]$')]],
      surface: ['', Validators.required],
      terrace: [''],
      surfaceTerrace: ['',Validators.required],
      category: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]],
      residence: ['', Validators.required]
    });
    this.id = this.route.snapshot.params['id'];
    this.service.fetchappartementById(this.id).subscribe((d) => {
      this.appartement = d;
      this.apartForm.patchValue(this.appartement);
      console.log(d)
      });
  }



  save() {
    if (this.apartForm.valid) {
      // Effectuer des actions avec les données du formulaire
      console.log(this.apartForm.value);
      this.service.fetchresidenceById(this.apartForm.value.residence).subscribe(
        (res:any)=>{
          this.apartForm.value.residence=res.id;
          this.service.addAppartement(this.apartForm.value).subscribe(
            ()=>{
            this.router.navigate(['/home']);
            console.log("Appartement added");
        }
        )
      }
    );
    } else {
      // Traiter les cas où le formulaire n'est pas valide
    }
  }

  update(){
    this.service
    .updateAppartement(this.apartForm.value,this.id)
    .subscribe(() => {
    this.router.navigate(['/home']);
    console.log('Appartement updated');
    });
  }

}
