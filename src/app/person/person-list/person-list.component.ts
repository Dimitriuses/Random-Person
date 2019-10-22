import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import Person from "../../model/person"
import {PersonService} from "../person.service";

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  @Output() getSelectedPerson = new EventEmitter<Person>();
  PersonList:Person[];

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.PersonList = this.personService.getAllPersons();
  }

  onPersonSelected(person:Person){
    this.getSelectedPerson.emit(person);
  }

}
