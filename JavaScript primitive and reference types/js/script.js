// Primitive Type

// number,string ,Boolean

// Different Address

 let a= 7;

 let b = a; /// b=7

 a = 45;

console.log(b);


// References Type

// array,object

// same address

 let numbers = [1,2,3]

 let newNumbers = numbers;


 console.log(newNumbers);
 numbers[1] = 500;
 console.log(numbers);
 console.log(newNumbers);