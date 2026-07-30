import { Component } from '@angular/core';
import Person from '../model/person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {

  /*
   * The template assigns to this from the list's (getSelectedPerson) output. It
   * was never declared in 2019, which JIT tolerates — `ng serve` simply created
   * the property on the instance — but AOT rejects it, so `ng build --prod`
   * failed with three errors and no production build ever existed. See README.md.
   */
  activePerson: Person;

}
