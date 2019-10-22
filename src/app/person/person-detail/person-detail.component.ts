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

  ngOnInit() {
    console.log("works",this.person);
  }

}
