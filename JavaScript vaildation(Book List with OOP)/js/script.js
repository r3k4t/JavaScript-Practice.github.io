// Get the UI elements
var form = document.querySelector("#book-form");



// Book Class
class Book{
    constructor(title,author,isbn){
        this.title=title
        this.author=author
        this.isbn = isbn
    }
}


// UI Class
class UI{
    constructor(){

    }
    addToBooklist(book){
        //console.log(book);

        var list = document.querySelector("#book-list");
        var row = document.createElement("tr");
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href ="#" class ="delete">X</a></td>`
        //console.log(row);
        
        list.appendChild(row);


    }

    clearFields(){
        document.querySelector("#title").value = "";
        document.querySelector("#author").value = "";
        document.querySelector("#isbn").value = "";

    }

    showAlert(message, className) {
        var div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        var container = document.querySelector('.container');
        var form = document.querySelector('#book-form');
        container.insertBefore(div,form);

        setTimeout(() => {
            document.querySelector('.alert').remove();

        },3000 );


    }

}


// Add Event Listener
form.addEventListener('submit',newBook)




// Define function

function newBook(e){

    var title = document.querySelector('#title').value;
    author = document.querySelector('#author').value;
    isbn = document.querySelector('#isbn').value;

    var ui = new UI();

    if (title === '' || author === '' || isbn === ''){

        ui.showAlert("Please fill all the fields!","error");

    } else {

        var book = new Book(title,author,isbn);
        //console.log(book);
    
        ui.addToBooklist(book);
    
        ui.clearFields();

        ui.showAlert("Book Added!","success");
    }

    e.preventDefault();
  

}