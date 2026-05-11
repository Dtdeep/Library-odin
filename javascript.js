const booksContainer = document.querySelector("#books-container");

const myLibrary = [];

function Book(title,author,pages,read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(bookTitle, bookAuthor, bookPages, bookRead) {
    let book = new Book(bookTitle,bookAuthor,bookPages,bookRead);
    myLibrary.push(book);
}

addBookToLibrary("Mikay adventures", "Mikay", "255", "Has Read");
addBookToLibrary("Baho mikay", "Mikay", "155", "Has not Read");
addBookToLibrary("Mikay adventures 2", "Mikay", "355", "Has Read");


const createCards = myLibrary.map(item => {
    const bookCard = document.createElement("div");
    const pTitle = document.createElement("p");
    const pAuthor = document.createElement("p");
    const pPages = document.createElement("p");
    const pRead = document.createElement("p");
    const pId = document.createElement("p");

    pId.textContent = `Book ID: ${item.id}`
    pTitle.textContent = `Title: ${item.title}`;
    pAuthor.textContent = `Author: ${item.author}`;
    pPages.textContent = `Pages: ${item.pages}`;
    pRead.textContent = `Read: ${item.read}`;
    

    booksContainer.appendChild(bookCard);
    bookCard.appendChild(pId);
    bookCard.appendChild(pTitle);
    bookCard.appendChild(pAuthor);
    bookCard.appendChild(pPages);
    bookCard.appendChild(pRead);
    console.log(`ïts working?!`);
})

