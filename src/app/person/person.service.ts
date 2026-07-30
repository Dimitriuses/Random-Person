import Person from '../model/person';

/*
 * In 2019 this service fetched each person from a Mockaroo endpoint with the
 * account's API key hardcoded in the URL. The key was live and public for seven
 * years; it has been revoked, and the generator below replaces it so the app has
 * no third-party dependency at all. See README.md ("What changed in 2026").
 *
 * The gender list is the one the original Mockaroo schema actually emitted — all
 * eight values, not the two the 2019 code branched on.
 */
const GENDERS = [
    'Male', 'Female', 'Non-binary', 'Agender',
    'Genderqueer', 'Bigender', 'Polygender', 'Genderfluid',
];

// Roughly the mix the 2019 endpoint returned, measured over 200 rows: 100 Male,
// 82 Female, and 18 spread across the other six.
const GENDER_WEIGHTS = [100, 82, 4, 4, 5, 2, 1, 2];

const FIRST_NAMES = [
    'Ada', 'Alan', 'Amara', 'Bohdan', 'Cecile', 'Dmytro', 'Edith', 'Elias',
    'Farida', 'Grace', 'Hedy', 'Ivan', 'Jun', 'Katherine', 'Lena', 'Mateo',
    'Nadia', 'Oksana', 'Priya', 'Rashid', 'Sofia', 'Taras', 'Vera', 'Yusuf',
];

const SURNAMES = [
    'Antonov', 'Bergstrom', 'Costa', 'Danylenko', 'Espinoza', 'Fowler',
    'Gutierrez', 'Haddad', 'Ivanova', 'Jensen', 'Kovalenko', 'Lindqvist',
    'Moreau', 'Nakamura', 'Okonkwo', 'Petrenko', 'Quintero', 'Rasmussen',
    'Shevchenko', 'Tanaka', 'Ueda', 'Varga', 'Whitfield', 'Zielinski',
];

const PATRONYMIC_STEMS = [
    'Andriy', 'Borys', 'Danylo', 'Emil', 'Fedir', 'Heorhiy', 'Hryhoriy',
    'Ihor', 'Yuliy', 'Kyrylo', 'Leonid', 'Mykola', 'Oleh', 'Pavlo',
    'Roman', 'Stepan',
];

const AVATAR_ROOT = 'assets/avatars';

function randomInt(maxExclusive: number): number {
    return Math.floor(Math.random() * maxExclusive);
}

function anyOf<T>(items: T[]): T {
    return items[randomInt(items.length)];
}

function weightedGender(): string {
    const total = GENDER_WEIGHTS.reduce((sum, weight) => sum + weight, 0);
    let roll = randomInt(total);
    for (let i = 0; i < GENDERS.length; i++) {
        roll -= GENDER_WEIGHTS[i];
        if (roll < 0) {
            return GENDERS[i];
        }
    }
    return GENDERS[0];
}

/*
 * Gender and age to avatar file.
 *
 * This is the function the 2019 version got wrong. It tested only 'Male' and
 * 'Female', and only ages below 100, so anyone outside those buckets was handed
 * `undefined` and the detail panel rendered <img src="null">. Six of the eight
 * genders the endpoint emitted fell through, as did an age of exactly 100 —
 * which the schema's range included. Every input now has an answer.
 */
export function pickAvatar(gender: string, age: number): string {
    if (gender !== 'Male' && gender !== 'Female') {
        return `${AVATAR_ROOT}/unspecified.svg`;
    }
    const group = gender.toLowerCase();
    const band = age < 20 ? 'child' : age < 50 ? 'adult' : 'senior';
    return `${AVATAR_ROOT}/${group}-${band}.svg`;
}

export class PersonService {

    private persons: Person[] = [];

    getAllPersons(): Person[] {
        return this.persons.slice();
    }

    /*
     * Synchronous, unlike the 2019 version. That one awaited a fetch but was
     * itself never awaited by its caller, so the list was always re-read before
     * the new person existed — which is why the UI shipped a manual "Update"
     * button next to "Generate".
     */
    generatePerson(): Person {
        const gender = weightedGender();
        const age = 1 + randomInt(100);
        const name = anyOf(FIRST_NAMES);
        const surname = anyOf(SURNAMES);
        const fatherName = `${anyOf(PATRONYMIC_STEMS)}ovych`;
        const phone = `${100 + randomInt(900)}-${100 + randomInt(900)}-${1000 + randomInt(9000)}`;
        const email = `${name}.${surname}@example.com`.toLowerCase();

        const person = new Person(
            name, surname, fatherName, gender, age, phone, email,
            pickAvatar(gender, age));

        this.persons.push(person);
        return person;
    }

    /*
     * Matches on every field rather than on object identity. Kept as written in
     * 2019 — it works, and rewriting it is beyond a tidy — but see the README's
     * "Known limitations": two identical people cannot both be deleted.
     */
    deletePerson(person: Person): void {
        let id = -1;
        for (let i = 0; i < this.persons.length; i++) {
            if (this.persons[i].name === person.name &&
                this.persons[i].surname === person.surname &&
                this.persons[i].fatherName === person.fatherName &&
                this.persons[i].gender === person.gender &&
                this.persons[i].age === person.age &&
                this.persons[i].phone === person.phone &&
                this.persons[i].email === person.email) {
                id = i;
            }
        }
        if (id !== -1) {
            this.persons.splice(id, 1);
        }
    }

}
