import { Component, OnInit, Input } from '@angular/core';
import Person from "../../model/person";

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {
  @Input() person:Person;
  constructor() { }

   //IMG:string;

  ngOnInit() {
    //console.log("works",this.person);
    /*if(this.person.gender == "Male"){
      if(this.person.year <20){
        this.IMG = "https://cdn170.picsart.com/upscale-229230808016212.png?r1024x1024"
      }
      else if(this.person.year <50){
        this.IMG = "https://i.pinimg.com/originals/05/4c/24/054c2448832f2c61e77584d727744520.jpg"
      }
      else if(this.person.year <100){
        this.IMG = "https://a.rgbimg.com/users/m/mz/mzacha/600/nq4DpUi.jpg"
      }
    }
    if(this.person.gender == "Female"){
      if(this.person.year <20){
        this.IMG = "https://www.nicepng.com/png/full/832-8329316_little-girl-girl-child-little-girl-shadow.png"
      }
      else if(this.person.year <50){
        this.IMG = "https://photy.org/photos/pmp890eb427de8a40fe9c437a2435d46436.jpg"
      }
      else if(this.person.year <100){
        this.IMG = "https://images-na.ssl-images-amazon.com/images/I/51IBBhi3nJL._SX466_.jpg"
      }
    }*/
  }



}
