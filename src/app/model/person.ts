export default class Person {
    name: string;
    surname: string;
    fatherName: string;
    gender: string;
    age: number;
    phone: string;
    email: string;
    img: string;

    constructor(
        name: string,
        surname: string,
        fatherName: string,
        gender: string,
        age: number,
        phone: string,
        email: string,
        img: string) {
        this.name = name;
        this.surname = surname;
        this.fatherName = fatherName;
        this.gender = gender;
        this.age = age;
        this.phone = phone;
        this.email = email;
        this.img = img;
    }
}
