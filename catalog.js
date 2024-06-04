document.addEventListener("DOMContentLoaded", function() {
    displayBooks();
});


function displayBooks() {
    const myLibrary = JSON.parse(localStorage.getItem("myLibrary")) || [];
    const booklist = document.getElementById("book-list");
    booklist.innerHTML = "";

    myLibrary.forEach(book => {
        const listItem = document.createElement("div");
        listItem.className = "book-item";
        listItem.innerHTML = `
        <div class="book-details">
            <h3 class="book-credentials">${book.title}</h3>
            <p class="book-credentials">by ${book.author}</p>
            <p class="book-credentials">${book.pages} pages</p>
        </div>
        <div class="book-actions">
            <button class="select-button">Select</button>
            <button class="delete-button">Delete</button>
        </div>
        `;

        listItem.querySelector(".select-button").addEventListener("click", ()=> selectBook(book.id));
        listItem.querySelector(".delete-button").addEventListener("click", ()=> deleteBook(book.id));
        booklist.appendChild(listItem);
    });
}

function selectBook(id) {
    const myLibrary = JSON.parse(localStorage.getItem("myLibrary")) || [];
    const selectedBook = myLibrary.find(book => book.id === id);

    if (selectedBook) {
        alert(`Selected Book: ${selectedBook.info()}`);
    }else {
        alert("book not found");
    }
}

function deleteBook(id) {
    let myLibrary = JSON.parse(localStorage.getItem("myLibrary")) || [];
    myLibrary = myLibrary.filter(book => book.id !== id);
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
    displayBooks();

}