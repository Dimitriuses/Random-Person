import Person from "../model/person"

export class PersonService{

    private Persons: Person[];

    getAllPersons(){
        return this.Persons.slice();
    }

    generatePerson(){
        
    }

}