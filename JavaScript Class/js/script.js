// Class(ES6)
// Class is a template for creating objects


class Person {

    constructor(vfirstname, vlastname, birthday) { //Parameter
        this.firstname = vfirstname;
        this.lastname = vlastname;
        this.dob = birthday;
    }



    CalculateAge() {

        var birthday = new Date(this.dob);
        var diff = Date.now() - birthday.getTime();
        var ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);

    }


    fullname(){

        return `${this.firstname}  ${this.lastname}`;
    }


}


var person1 = new Person("Rahat", "Khan", "8-6-1998");
var person2 = new Person("Moniul", "Islam", "11-5-1995");
var person3 = new Person("Simanta", "Paul", "8-8-1996");


//Class
console.log(person1);
console.log(person2);
console.log(person3);


//CalculateAge
console.log(person1.CalculateAge());
console.log(person2.CalculateAge());
console.log(person3.CalculateAge());


//fullname == Undefined
console.log(person1.fullname());


