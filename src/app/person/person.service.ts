import Person from "../model/person"

export class PersonService{

    private Persons: Person[] = [];

    getAllPersons(){
        return this.Persons.slice();
    }

    async generatePerson(){
        let url = "https://my.api.mockaroo.com/person__default_.json?count=1&key=8dfacd80"
        let response = await fetch(url);
        if (response.ok) {
            let json = await response.json();
            console.log(json);
            const person = new Person(json.first_name,json.last_name,json.fater_name,json.gender,json.year,json.phone,json.email);
            console.log(person);
            this.Persons.push(person);
            console.log(this.Persons);
        } else {
            alert("Ошибка HTTP: " + response.status);
        }

    }

}