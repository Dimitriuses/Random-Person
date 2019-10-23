export default class Person {
    name: string;
    surname: string;
    faterName: string;
    gender:string;
    year: number;
    phone: string;
    email: string;

    constructor(name: string, surname: string,fname: string,gender:string,year:number,phone:string,email:string){
        this.name = name;
        this.surname = surname;
        this.faterName = fname;
        this.gender = gender;
        this.year = year;
        this.phone = phone;
        this.email = email;
    }
}