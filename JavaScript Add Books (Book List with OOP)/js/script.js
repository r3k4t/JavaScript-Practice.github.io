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

}


// Add Event Listener
form.addEventListener('submit',newBook)




// Define function

function newBook(e){

    var title = document.querySelector('#title').value;
    author = document.querySelector('#author').value;
    isbn = document.querySelector('#isbn').value;


    var book = new Book(title,author,isbn);
    //console.log(book);

    var ui  = new UI();

    ui.addToBooklist(book);

    ui.clearFields();

    e.preventDefault();


    

}