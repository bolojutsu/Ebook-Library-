document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("bookform").addEventListener("submit", function(event) {
        event.preventDefault();
        addBookToLibrary();
    });

   document.getElementById("add-new-book").addEventListener("click", function(){
        document.getElementById("bookform").style.display = "block";
   });
   document.getElementById("view-catalog-button").addEventListener("click", function(){
    
   });

});

const myLibrary = JSON.parse(localStorage.getItem("myLibrary")) || [];

let bookId = myLibrary.length > 0 ? Math.max(...myLibrary.map(book => book.id)) + 1 : 0;


class Book {
    constructor(title, author, pages) {
        this.id = bookId ++;
        this.title = title
        this.author = author
        this.pages = pages
    }
    info() {
        return `${this.title} by ${this.author} has ${this.pages} pages`;
    }
}

function addBookToLibrary() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;

    const newBook = new Book(title, author, pages);
    let myLibrary = JSON.parse(localStorage.getItem("myLibrary")) || [];
    myLibrary.push(newBook);
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));

    console.log("Library:", myLibrary);
    console.log(newBook.info());

    document.getElementById("bookform").reset();
}



