import { Component, OnInit } from '@angular/core';
import {PersonService} from "./person.service"; 

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor(private personService: PersonService) { }

  ngOnInit() {
  }

  

}
