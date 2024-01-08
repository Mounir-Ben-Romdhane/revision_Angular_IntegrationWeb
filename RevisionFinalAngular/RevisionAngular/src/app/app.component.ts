import { Component, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { PageComponent } from './ExamenCSA/page/page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  title = 'revisionFinal';
  search:any;
  listArticles = [
    {titre:'Le championnat du monde',contenu:'Le champion du monde de cette année est ....',auteur:'Med Taher',date:'12/12/2005'},
    {titre:'Les nouveaux parents',contenu:'Les nouveaux parents....',auteur:'Ahmed Said',date:'11/11/2018'},
    {titre:'Comment écrire votre CV',contenu:'Pour réussir à décraucher un emploi ...',auteur:'Marie Elsa',date:'02/04/2017'}
  ]




}
