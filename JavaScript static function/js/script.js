// Static Function

class Person {
    constructor(fname, lname) {
        this.firstname = fname;
        this.lastname = lname;
    }

    // greeting(){
    //        return `hello ${this.firstname}  ${this.lastname}`;
    //  }


    greeting() {
        console.log(`hello!${this.firstname} ${this.lastname}`);
    }


    static test() {
        console.log("I am static!");
    }
}


let person1 = new Person("Rahat", "Khan");


console.log(person1.greeting());
console.log(Person.test());