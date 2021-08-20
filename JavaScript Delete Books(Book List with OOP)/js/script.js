// Get the UI elements
var form = document.querySelector("#book-form");
var booklist = document.querySelector("#book-list");



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
   static addToBooklist(book){
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

    static clearFields(){
        document.querySelector("#title").value = "";
        document.querySelector("#author").value = "";
        document.querySelector("#isbn").value = "";

    }

    static showAlert(message, className) {
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
    static deleteFromBook(target){
        if(target.hasAttribute('href')){
           target.parentElement.parentElement.remove();
        }
    }

}


// Add Event Listener
form.addEventListener('submit',newBook);
booklist.addEventListener('click',removeBook);




// Define function

function newBook(e){

    var title = document.querySelector('#title').value;
    author = document.querySelector('#author').value;
    isbn = document.querySelector('#isbn').value;

    var ui = new UI();

    if (title === '' || author === '' || isbn === ''){

        UI.showAlert("Please fill all the fields!","error");

    } else {

        var book = new Book(title,author,isbn);
        //console.log(book);
    
        UI.addToBooklist(book);
    
        UI.clearFields();

        UI.showAlert("Book Added!","success");
    }

    e.preventDefault();
  

}

function removeBook(e){

    UI.deleteFromBook(e.target);
    UI.showAlert('Book Removed!','success');

}