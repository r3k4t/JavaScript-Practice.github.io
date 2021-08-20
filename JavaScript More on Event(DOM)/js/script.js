// Events of JavaScript
// https://www.w3schools.com/JS/js_events_example.asp
// Event Listener
document.querySelector('.container').addEventListener('mousemove',message);
document.querySelector(".container").style.background ='red';

function message(e){
    let val = e;
    val = e.target; //this
    val = e.target.id;

    val = e.timeStamp;
    val = e.type;
    val = e.clientY;
    val = e.clientX;
    
    val = e.offsetY;
    val = e.offsetX;
    val = this;
   // console.log(val);
   this.style.background = `#${e.offsetX}`;
   console.log(e.offsetX);
   console.log(e.offsetY);
   console.log(val);


  






    
}



