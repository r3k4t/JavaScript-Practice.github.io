// Asynchronous
// Asynchronous JavaScript And XML

document.getElementById("get_data").addEventListener('click',loadData);

function loadData(){
    //Create XMR Object(Xml Http Request)
    xhr = new XMLHttpRequest();

    // Open
    xhr.open('GET','data.txt',true);

    xhr.onload = function(){
        //HTTP statuses
        // 200: "OK"
        //403: "Forbidden"
        //404: "Not Found"

        if(this.status === 200){
            document.getElementById("output").innerHTML = `<h4>${this.responseText}</h4>`

        }

    }
    xhr.send();
   // console.log(xhr);

}