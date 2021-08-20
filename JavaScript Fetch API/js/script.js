// This code is not correct but technique is important.
// Fetch API

document.getElementById("get_data").addEventListener('click',getData);


// xhr.open("GET", " http://api.icndb.com/jokes/random",true)

// Arrow Function (Arrow is a important function)



function getData () {
     fetch("http://api.icndb.com/jokes/random");
         then(res => res.json());
         then(data =>{console.log(data);} )
         .catch(err => {console.log(err);})
    
}