let person = {
    firstname: "Rahat",
    lastname :"Khan",
    dob:"8-6-1998", //number,string,date,array,object


fullname : function () {//Method
    return `${this.firstname} ${this.lastname}`;

   }

}



console.log(person.firstname);
console.log(person.fullname());


let str = "Bohubrihi";
console.log(str.length);
console.log(str.split());