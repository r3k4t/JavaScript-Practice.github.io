// http://www.icndb.com/
// API
// RESTful API

document.getElementById("get_jokes").addEventListener("click", loadjokes);

function loadjokes(e) {

    var number = document.getElementById("numberjokes").value;

    var xhr = new XMLHttpRequest();

    xhr.open("GET", `http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onprogress = function () {

        document.getElementById("output").innerHTML = "Loading .......";

    }

    xhr.onload = function () {
        if (this.status === 200) {
            var data = JSON.parse(this.responseText);
            var joke = data.value;
            //console.log(joke)
            var output = "<ol";

            joke.forEach(function (item) {

                output += `<li>${item.joke}</li>`;

            });

            output += "</ol>";
            document.getElementById("output").innerHTML = output;
        }
    }
    xhr.send();

}