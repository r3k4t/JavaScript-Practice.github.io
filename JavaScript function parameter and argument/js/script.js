// function parameter/argument


function saySomething(fname = "Rahat",lname = "Khan"){
    console.log(`Hello ${fname} ${lname}!`);
}

// alert("Hello");
// let val = "Software Engineer";
let firstname = "Software";
let lastname = " Engineer";

saySomething(firstname, lastname);


function addNum(a=0,b=0){
    console.log(a+b);
}
addNum(4,5);
addNum(3.6,2.3);