const myLibrary = [];

id = 0; 
let submit_button = document.getElementById('form_submit');
let book_name_entry = document.getElementById('book_name');
let book_author_entry = document.getElementById('book_author');
let book_year_entry = document.getElementById('book_year');

form_submit.addEventListener('click', function (){
    addBookToLibrary();
    book_name_entry.value = '';
    book_author_entry.value = '';
    book_year_entry.value = '';
    document.getElementById('book_entry').style.visibility = 'hidden';

});

function Book(title, author, year)
{
    this.title = title;
    this.author = author; 
    this.year = year;
    this.id = id;
    id ++;
}

function addBookToLibrary()
{
    let book = new Book(book_name_entry.value, book_author_entry.value, book_year_entry.value);
    myLibrary.push(book);
    render_books();

}

var library = document.getElementById('book_container');

function render_books()
{
    library.innerHTML = '';
    if (myLibrary.length > 0)
    {
        for (let i = 0; i < myLibrary.length; i++)
            {
                if (i > 15)
                {
                    break;
                }
                let book_div = document.createElement('div');
                book_div.setAttribute('id', myLibrary[i].id);
                book_div.setAttribute('class', 'book_div');
                book_title = document.createElement('p')
                book_title.innerHTML = 'Title: ' + myLibrary[i].title; 
                book_author = document.createElement('p')
                book_author.innerHTML = 'Author: ' + myLibrary[i].author;
                book_year = document.createElement('p')
                book_year.innerHTML = 'Year: ' + myLibrary[i].year;
                
                book_div.appendChild(book_title);
                book_div.appendChild(book_author);
                book_div.appendChild(book_year);
                book_div.appendChild(create_minus_image(myLibrary[i].id));
                library.appendChild(book_div);
            }

    }
    
    

}

function create_minus_image(id){
    minus_image = document.createElement('img');
    minus_image.setAttribute('src', './Images/minus_book.svg');
    minus_image.style.width = '25px';
    minus_image.style.height = '25px';

    minus_image.addEventListener('click', function(){
        remove_image(id);
    })
    return minus_image;
}

function remove_image(id){
    const index = myLibrary.findIndex(book => book.id == id);
    if (index != -1)
    {
        myLibrary.splice(index, 1);
        render_books();
    }
}

let plus_book = document.getElementById('plus');

plus_book.addEventListener('click', function(){
    document.getElementById('book_entry').style.visibility = 'visible';

})