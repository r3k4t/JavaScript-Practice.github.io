// Callback Function


// setTimeout(function(){
//     console.log("Hello World");
// },5000);

// Synchronous

// var persons = [
//     {firstName:"Oga",lastName:"Rubel"},
//     {firstName:"Rahat",lastName:"Khan"}
// ]

// function createPerson(person){
//     setTimeout(function(){
//         persons.push(person);

//     },4000)


// }

// function getPerson(){
//     setTimeout(function(){
//         var output = "";
//         persons.forEach(function(person){
//             output += `<li>${person.firstName} ${person.lastName}</li>`;
//         },1000);
//         document.getElementById("output").innerHTML = output;
//     })
// }
// createPerson({firstName:"Rony",lastName:"Chy"});
// getPerson();





// Asynchrononus 
// Callback


var persons = [
    {firstName:"Oga",lastName:"Rubel"},
    {firstName:"Rahat",lastName:"Khan"}
]

function createPerson(person,callback){
    setTimeout(function(){
        persons.push(person);
        callback();
        //getPerson();

    },4000)


}

function getPerson(){
    setTimeout(function(){
        var output = "";
        persons.forEach(function(person){
            output += `<li>${person.firstName} ${person.lastName}</li>`;
        },1000);
        document.getElementById("output").innerHTML = output;
    })
}
createPerson({firstName:"Rony",lastName:"Chy"},getPerson);



