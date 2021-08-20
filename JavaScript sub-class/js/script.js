// Sub-Class
//inheritance

class Person {
    constructor(fname,lname){ //Base Class
        this.firstname=fname;
        this.lastname=lname;
    }



   greeting(){
       return `Hello ${this.firstname} ${this.lastname}`;

   }

}

class Customer extends Person { //Sub Class
      constructor(fname,lname,phone,memberShip){
      super(fname,lname);

          this.phone = phone;
          this.memberShip = memberShip ;


      }


     fullname(){
         return `${this.firstname} ${this.lastname}`;
     }



}




// var or let

let person1 = new Person("Rahat","Khan");
console.log(person1);
console.log(person1.greeting());



let customer1 = new Customer("Rony","Chy","0177777888","1234")

console.log(customer1);
console.log(customer1.greeting());
console.log(customer1.fullname());