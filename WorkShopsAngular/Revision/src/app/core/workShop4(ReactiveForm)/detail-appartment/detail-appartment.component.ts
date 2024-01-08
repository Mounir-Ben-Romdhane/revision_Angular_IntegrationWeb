import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-appartment',
  templateUrl: './detail-appartment.component.html',
  styleUrls: ['./detail-appartment.component.css']
})
export class DetailAppartmentComponent {

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    //Get the id from url
    let id = this.route.snapshot.params['id'];
    console.log("id : ",id);
  }

}
