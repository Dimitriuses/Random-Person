import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Person from "../../../model/person"

@Component({
  selector: 'app-person-item',
  templateUrl: './person-item.component.html',
  styleUrls: ['./person-item.component.css']
})
export class PersonItemComponent implements OnInit {

  @Input() singlePerson: Person;
  @Output() selectedPerson = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }
  onActivePerson(){
    this.selectedPerson.emit();
  }
}
