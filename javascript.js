const mainContainer = document.querySelector(".main-container")
const booksContainer = document.querySelector("#books-container");
const titleInput = document.querySelector("#title-input")
const authorInput = document.querySelector("#author-input")
const pagesInput = document.querySelector("#pages-input")
const readInput = document.querySelector("#read-input")



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

const renderCards = () => {
            while (booksContainer.firstChild) {
                booksContainer.removeChild(booksContainer.firstChild);
            }
            myLibrary.map(item => {
                const closeBtn = document.createElement("button");
                const bookCard = document.createElement("div");
                const pTitle = document.createElement("p");
                const pAuthor = document.createElement("p");
                const pPages = document.createElement("p");
                const pRead = document.createElement("p");
                const pId = document.createElement("p");

                bookCard.dataset.id = item.id.toString();
                closeBtn.textContent = "x"
                closeBtn.setAttribute("id", "close-btn")
                pId.textContent = `Book ID: ${item.id}`
                pTitle.textContent = `Title: ${item.title}`;
                pAuthor.textContent = `Author: ${item.author}`;
                pPages.textContent = `Pages: ${item.pages}`;
                pRead.textContent = `Read: ${item.read}`;
                
                booksContainer.appendChild(bookCard);
                bookCard.appendChild(closeBtn);
                bookCard.appendChild(pId);
                bookCard.appendChild(pTitle);
                bookCard.appendChild(pAuthor);
                bookCard.appendChild(pPages);
                bookCard.appendChild(pRead);
                console.log(`ïts working?!`);
        })
}

mainContainer.addEventListener('click' , (event)=>{
    let target = event.target;
    
    switch(target.id){
        case "submit-btn":
            const titleText = titleInput.textContent;
            const authorText = authorInput.textContent;
            const pagesText = pagesInput.textContent;
            const readText = readInput.textContent;
            addBookToLibrary(titleText, authorText, pagesText, readText);
            renderCards();
            event.preventDefault();
            break;
        case "close-btn":
            console.log("closee!!!!")
            break;
    }
})





