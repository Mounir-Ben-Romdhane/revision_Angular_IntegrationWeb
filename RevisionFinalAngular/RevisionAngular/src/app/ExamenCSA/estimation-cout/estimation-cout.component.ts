import { Component } from '@angular/core';
import { Annonce } from './../models/annonce';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-estimation-cout',
  templateUrl: './estimation-cout.component.html',
  styleUrls: ['./estimation-cout.component.css']
})
export class EstimationCoutComponent {


  estimerForm !: FormGroup;
  list: string[] = ['','haut','bas'];
  result!: number ;
  show = false;

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.estimerForm = this.fb.group({
      position: ['', [Validators.required]],
      nbDescription: ['', [Validators.required, Validators.max(60)]],
    })
  }

  estimer(){
    this.show = true;
    console.log(this.estimerForm.value);
    if(this.estimerForm.value.position=="haut"){
      if(this.estimerForm.value.nbDescription>30){
        this.result = 20;
      }else{
        this.result = 10;
      }
    }else if(this.estimerForm.value.position=="bas"){
      if(this.estimerForm.value.nbDescription>30){
        this.result = 15;
      }else{
        this.result = 5;
      }
    }
  }
}
