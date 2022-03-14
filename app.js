let myLibrary = [];
const cardSection = document.querySelector('.card-section');

function Book(title, author, pages) { //Book object constructor 
    this.title = title;
    this.author = author;
    this.pages = pages;
}

const newBookButton = document.querySelector('.new-book-button'); //button to bring up the add book form
newBookButton.addEventListener('click', function(e){
    document.querySelector('.book-input-form').style.display = "block";
});

const closeFormButton = document.querySelector('.close-form-button');
closeFormButton.addEventListener('click', function (e) {
    document.querySelector('.book-input-form').style.display = "none";
})

const addBookButton = document.querySelector('.add-book-button'); //button to submit book info


addBookButton.addEventListener('click', function (e) {
    // e.preventDefault();
    const titleInputBox = document.querySelector('#title');
    const authorInputBox = document.querySelector('#author')
    const pagesInputBox = document.querySelector('#pages');
 

    const newTitle = titleInputBox.value;
    const newAuthor = authorInputBox.value;
    const newPages = pagesInputBox.value;
  

    const newBook = new Book(newTitle, newAuthor, newPages);

    addBookToLibrary(newBook);
    createBookCard(newBook);

    titleInputBox.value = "";
    authorInputBox.value = "";
    pagesInputBox.value = "";

});

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

function createBookCard(newBook) {
    const bookCard = document.createElement('div');
    for (let prop in newBook) {
        const cardAttribute = document.createElement('p');
        cardAttribute.innerText = newBook[prop];
        bookCard.appendChild(cardAttribute);
    }

    bookCard.classList.add('book-card-container');
    cardSection.appendChild(bookCard);
}
