
// Do While loop

var i = 1;

do{
   console.log("The vaule of : "+i);
   i++; 
}while(i<=5);

console.log("complete");




// While loop

var i = 1;
while(i<=5){
    console.log("The value of : "+i);
    i++;
}

console.log("Finish");


// while loop practice


var i =  1;
var sum = 0;
var product = 1;
// 1 + 2 + 3 + 4 + 5.......
// 1 * 2 * 3 * 4 * 5.......
while (i <= 10){
   //console.log(i);
   sum = sum + i;
   product = product * i;
   i++;
   
}
//console.log("Out of the loop");
console.log("Result: "+ sum);
console.log("Product: "+ product);