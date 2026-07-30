import { Component, Input } from '@angular/core';
import Person from '../../model/person';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent {
  @Input() person: Person;
}
