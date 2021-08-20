
// Object
var student = {
    name:"Rahim",
    age:26,
    hometown:"Dhaka",
}

//Convert object to json
var student_json = JSON.stringify(student);
console.log(student_json);


//Convert json to javascript
var student_new = JSON.parse(student_json);
console.log(student_new);