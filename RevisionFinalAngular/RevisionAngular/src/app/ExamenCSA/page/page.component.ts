import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent {

  @Input()nbArticle !: number;
  @Input()listArticle : any[] = [];
  @Output()testOutput = new EventEmitter();
  test!: any;


  ngOnInit():void {
    console.log('List article',this.listArticle);
    console.log('nb articles',this.nbArticle);
  }

  sendToParent(){
    this.testOutput.emit(this.test)
  }
}
