//For-in string/array/object
//For-of string/array

let name ="I am learning Javascript!";
let food =["Cake","Chocolate","Ice Cream"];


//object doesn't have index
let person = {

    name: "Shakib Al Hasan",
    professional:"Cricketer",
    team:"Bangladesh",
    age:33,
}

// We will get index
for( var x in name){
   console.log(`index ${x} and item ${name[x]}`)
}

console.log("=================>");

// We will get items/values
for(var x of name){
   console.log(x);
}


console.log("=================>")



// We will get indexes
for(var y in food){
   console.log(`Index: ${y}; and item: ${food[y]}`);
}

console.log("================>");


// We will get items
for(var y of food){
   console.log(y);
}


console.log("=================>");


// For-in with objects
for(var x in person){
   console.log(`Property: ${x}
   Value:${person[x]}`);

}


// For-of won't work for objects
