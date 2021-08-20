// Spread Operator ...
let str = "Bohubrihi";
let newStr = [...str];

//console.log(newStr);

let fruit1 = ["Apple", "Pine-apple", "Mango"];
let fruit2 = ["Orange", "Grape"];
let newFruit = "Jackfruit";

let newArr = [...fruit1, newFruit, ...fruit2];

//console.log(newArr);
// Spread on Object (ES8)
let person = {
    fname: "Simanta",
    lname: "Paul"
}

let newPerson = {...person, dob: "08-26-1995"}
console.log(newPerson);