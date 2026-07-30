import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import Person from '../../model/person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  @Output() getSelectedPerson = new EventEmitter<Person>();
  personList: Person[];

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.personList = this.personService.getAllPersons();
  }

  onPersonSelected(person: Person) {
    this.getSelectedPerson.emit(person);
  }

  /*
   * Still here, and still wired to a button. getAllPersons() hands back a copy,
   * so this component holds a snapshot that has to be re-read after any change.
   * In 2019 it was the only way to see a generated person at all.
   */
  update() {
    this.personList = this.personService.getAllPersons();
  }

  onDeletePerson(person: Person) {
    this.personService.deletePerson(person);
    this.update();
  }

  onGenerate() {
    this.personService.generatePerson();
    this.update();
  }

}
