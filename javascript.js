const mainContainer = document.querySelector(".main-container")
const booksContainer = document.querySelector("#books-container");
const titleInput = document.querySelector("#title-input");
const authorInput = document.querySelector("#author-input");
const pagesInput = document.querySelector("#pages-input");
const readInput = document.querySelector("#read-input");

const myLibrary = [];

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
                const readToggle = document.createElement("button");

                bookCard.dataset.id = item.getId.toString();
                closeBtn.textContent = "x"
                closeBtn.setAttribute("id", "close-btn");
                readToggle.setAttribute("id", "toggle-btn");
                pId.textContent = `${item.id}`;
                pTitle.textContent = `Title: ${item.title}`;
                pAuthor.textContent = `By ${item.author}`;
                pPages.textContent = `${item.pages} Pages`;
                pRead.textContent = `Read Status: ${item.read}`;
                readToggle.textContent = `Toggle`;
                
                booksContainer.appendChild(bookCard);
                bookCard.appendChild(closeBtn);
                bookCard.appendChild(pId);
                bookCard.appendChild(pTitle);
                bookCard.appendChild(pAuthor);
                bookCard.appendChild(pPages);
                bookCard.appendChild(pRead);
                bookCard.appendChild(readToggle);
                console.log(`Rendering Success`);
        })
};

class Book {
    #id;
    title;
    author;
    pages;
    read;

    constructor(title,author,pages,read){
        this.#id = crypto.randomUUID();
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    get getId() {
        return this.#id;
    }
    

    toggleReadStatus(status){
        let read = status;
        if(read === true){
            read = false;
            this.read = `Not Read Yet`
        }else{
            read = true;
            this.read = `Read Already`; 
        }
            renderCards();
    }
}

function addBookToLibrary(bookTitle, bookAuthor, bookPages, bookRead) {
    let book = new Book(bookTitle,bookAuthor,bookPages,bookRead);
    myLibrary.push(book);
}

mainContainer.addEventListener('click' , (event)=>{
    let target = event.target;

    switch(target.id){
        case "submit-btn":
            event.preventDefault();
            const titleText = titleInput.value;
            const authorText = authorInput.value;
            const pagesText = pagesInput.value;
            const readText = readInput.value;
            addBookToLibrary(titleText, authorText, pagesText, readText);
            console.log("Creation of book object Complete");
            renderCards();
            break;
        case "close-btn":
            const deleteIndex = myLibrary.findIndex((item)=>{
                return item.getId === target.parentNode.dataset.id;
            });
            myLibrary.splice(deleteIndex, 1);
            renderCards();
            console.log(myLibrary);
            console.log("Deletion of book object complete");
            break;
        case "toggle-btn":
            let status;
            const findIndex = myLibrary.findIndex((item)=>{
                return item.getId === target.parentNode.dataset.id;
            });

            if(myLibrary[findIndex].read === "Read Already"){
                status = true;
            }else if (myLibrary[findIndex].read === "Not Read Yet"){
                status = false;
            }
            myLibrary[findIndex].toggleReadStatus(status);
            break;
    }
})