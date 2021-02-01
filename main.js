
/**
 * I MongoDB finns inte `console.log`, dar kor man print() istallet.
 */


// hur man skapar en klass
class Person {
    // konstruktor / funktion som kors nar man skapar en ny instans av klassen
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // funktion som finns pa klassen som andrar this.age vardet.
    becomeOlder() {
        this.age += 1;
    }
}

// skapa en ny instans av en klass
person = new Person("david", 29);

// exempel pa att stoppa in en klass i en collection i MongoDB
db.people.insert(JSON.stringify(person))

// printa
console.log(person.age);

// kalla pa funktion pa instans av klass
person.becomeOlder();

// print
console.log(person.age);

// exempel pa en funktion utanfor en klass,
// som returnerar ett objekt.
function createPerson(name, age) {
    return {
        "name": name,
        "age": age
    };   
}

// exempel pa en "lambda" funktion, eller "arrow function" som manga
// kallar det.
const createContact = (firstname, phone) =>
    ({ "firstname" : firstname, "phone": phone });

// kalla pa funktion
contact = createContact("john", "+46343343");

console.log(contact);

// exempel pa insert i mongo.
db.people.insert(createPerson("john doe", 33));

console.log(person);