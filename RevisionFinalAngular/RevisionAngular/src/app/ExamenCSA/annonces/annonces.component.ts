import { Component } from '@angular/core';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.css']
})
export class AnnoncesComponent {
  displayListe : boolean = true ;
  displayCout : boolean = true;

  fndisplayListe(){
    this.displayListe = false ;
    this.displayCout = true ;
  }


  fndisplayCout(){
    this.displayListe = true ;
    this.displayCout = false ;
  }
}
