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
            //console.log(json);
            let IMG;
            if(json.gender == "Male"){
                if(json.year <20){
                  IMG = "https://cdn170.picsart.com/upscale-229230808016212.png?r1024x1024"
                }
                else if(json.year <50){
                  IMG = "https://i.pinimg.com/originals/05/4c/24/054c2448832f2c61e77584d727744520.jpg"
                }
                else if(json.year <100){
                  IMG = "https://a.rgbimg.com/users/m/mz/mzacha/600/nq4DpUi.jpg"
                }
              }
              if(json.gender == "Female"){
                if(json.year <20){
                  IMG = "https://www.nicepng.com/png/full/832-8329316_little-girl-girl-child-little-girl-shadow.png"
                }
                else if(json.year <50){
                  IMG = "https://photy.org/photos/pmp890eb427de8a40fe9c437a2435d46436.jpg"
                }
                else if(json.year <100){
                  IMG = "https://images-na.ssl-images-amazon.com/images/I/51IBBhi3nJL._SX466_.jpg"
                }
              }
            const person = new Person(json.first_name,json.last_name,json.fater_name,json.gender,json.year,json.phone,json.email,IMG);
            //console.log(person);
            this.Persons.push(person);
            //console.log(this.Persons);
        } else {
            alert("Ошибка HTTP: " + response.status);
        }

    }
    DeletePerson(person:Person){
        //console.log("delete person",person);
        let Id = -1;
        for (let i = 0; i < this.Persons.length; i++) {
            if(this.Persons[i].name==person.name&&
                this.Persons[i].surname==person.surname&&
                this.Persons[i].faterName==person.faterName&&
                this.Persons[i].gender==person.gender&&
                this.Persons[i].year==person.year&&
                this.Persons[i].phone==person.phone&&
                this.Persons[i].email==person.email){
                //console.log(this.Persons[i],i);
                Id = i;
            } 
            
        }
        if(Id!=-1){
            this.Persons.splice(Id,1);
        }
    }

}