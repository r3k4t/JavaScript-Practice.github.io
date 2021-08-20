// https://jsonlint.com
// string
// number
// object(JSON object)
// array
// Boolean
// null


// Doesn't Support undefined,date,function

var person = {
    name: "Rahim", // String
    age : 25, // Number
    hometown : "Dhaka",
    married : false, //Boolean
    dob : "1995-05-12", // Date
    test_null: null,// null
    test_undefined:undefined, //undefined
    greet: function(){ // function
        console.log(`Hello ${this.name}`);
    }
}

var person_json = JSON.stringify(person);
console.log(person_json);