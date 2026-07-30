import { Component, Input, Output, EventEmitter } from '@angular/core';
import Person from '../../../model/person';

@Component({
  selector: 'app-person-item',
  templateUrl: './person-item.component.html',
  styleUrls: ['./person-item.component.css']
})
export class PersonItemComponent {

  @Input() singlePerson: Person;
  @Output() selectedPerson = new EventEmitter<void>();
  @Output() deletedPerson = new EventEmitter<void>();

  onActivePerson() {
    this.selectedPerson.emit();
  }

  onDelete() {
    this.deletedPerson.emit();
  }
}
