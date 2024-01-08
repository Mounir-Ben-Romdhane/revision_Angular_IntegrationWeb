import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent {

  @Input()nbArticle !: number;
  @Input()listArticle : any[] = [];

  ngOnInit():void {
    console.log('List article',this.listArticle);
    console.log('nb articles',this.nbArticle);
  }
}
