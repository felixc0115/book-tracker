let myLibrary = [];
const cardSection = document.querySelector('.card-section');

function Book(title,author,pages,isRead) {
this.title = title;
this.author = author;
this.pages = pages;
this.isRead = isRead
}

const newBookButton = document.querySelector('.new-book-button');

newBookButton.addEventListener('click', function (e) {
   const newTitle = prompt('Enter a title');
   const newAuthor = prompt('Enter an author');
   let newPages = +prompt('Enter number of pages');
   let newIsRead = prompt('Enter yes or no');
   if(newIsRead.toLowerCase() === 'yes') {
       newIsRead = true;
   }
   const newBook = new Book(newTitle,newAuthor,newPages,newIsRead);
   addBookToLibrary(newBook);
   createBookCard(newBook);
   console.log(typeof Object.keys(newBook)[0]); //This accesses the key names of the object so that I can use it to print the card attributes
})

function addBookToLibrary (newBook) {
    myLibrary.push(newBook);
}

function createBookCard(newBook) {
    const bookCard = document.createElement('div');
    for (let i=0; i<=Object.keys(newBook).length-1;i++) {
        const cardAttribute = document.createElement('p');
        cardAttribute.innerText = Object.keys(newBook)[i];
        bookCard.appendChild(cardAttribute);
    }
    bookCard.classList.add('book-card-container');
    cardSection.appendChild(bookCard);
}
