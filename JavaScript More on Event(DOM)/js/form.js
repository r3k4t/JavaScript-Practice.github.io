//Events of JavaScript
//https://www.w3schoos.com/JS/js_events_example.asp

//Event Listener

document.querySelector("#name").addEventListener('focus',test);
document.querySelector("#name").addEventListener('keyup',test2);

function test(e){

    this.style.background = "pink";
    
}

function test2(e){
//console.log(this.value);
   document.getElementById("demo").innerText = this.value;
}