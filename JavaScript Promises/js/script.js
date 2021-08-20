// incorrect

//JavaScript Promises
// .then
var persons = [
    {firstName:"Oga",lastName:"Rubel"},
    {firstName:"Rahat",lastName:"Khan"}
]

function createPerson(person){
    setTimeout(function(){
        var prom = new Promise(function(resolve,reject){
        persons.push(person);
        var error = false;
        if(!error){
            resolve();
        }
        else{
            reject("Error!:Something  Wrong!");
        }
        
        
    });
    return prom;
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
createPerson({firstName:"Rony",lastName:"Chy"})
     .then(getPerson);
     .catch(function(err){
       console.log(err);
     });