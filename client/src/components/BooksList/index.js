import React from "react";
import "./style.css";
import API from "../../utils/API";

// Separate the UI specific transforming logic to utils folder
// import { bookAuthors } from '../utils';
const bookAuthors = authors => {
  if (authors){
  if (authors.length <= 2) {
      authors = authors.join(' and ');
  } else if (authors.length > 2) {
      let lastAuthor = ' and ' + authors.slice(-1);
      authors.pop();
      authors = authors.join(', ');
      authors += lastAuthor;
  }
  return authors;
}   else {
  authors = "Author not provided";
}
  return authors;
}

function handleSave({book}) {
  // event.preventDefault();
  // if (formObject.title && formObject.author) {
    API.saveBook({
      id: book.id,
      title: book.volumeInfo.title,
      authors: [book.volumeInfo.authors],
      description: book.volumeInfo.description,
      image: book.volumeInfo.infoLink
    })
      // .then(res => loadBooks())
      .then((res)=>{
        console.log("books loaded");
      })
      .catch(err => console.log(err));
  // }
};

const Book = ({ book }) => {
  return (
      <div>
        <div className="row" key={book.id}>
          <div className="col">{book.volumeInfo.title}
          <button onClick={() => handleSave({book})} className="save">Save</button>
          {/* <button onClick={() => book.saveBook(book.id)} className="save">Save</button> */}
          {/* <button onClick={() => book.viewBook(book.id)} className="view">View</button> */}
          <button><a className="view" href={book.volumeInfo.infoLink} target="_blank">View</a></button>
          </div>
        </div>
        <div className="row">
          <div className="col">{book.volumeInfo.publishedDate}</div>
        </div>
        <div className="row">
          <div className="col">{bookAuthors(book.volumeInfo.authors)}</div>
        </div>
        <div className="row">
          <div className= "col img-fluid">
          <img alt={`${book.volumeInfo.title} book`}
          src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
        />
        <span className="text">{book.volumeInfo.description}</span>
        </div>
      </div>
    </div>  
        
    //     <div>
    //       <h3>{book.volumeInfo.title}</h3>
    //       <p>{bookAuthors(book.volumeInfo.authors)}</p>
    //       <p></p>
    //       <p>{book.volumeInfo.description}</p>
    //       <p>{book.volumeInfo.infoLink}</p>
    //       <p>{book.id}</p>
    //     </div>
    //   </div>
    //   <hr />
    // </li>
  );
};

const BooksList = ({ books }) => {
  return (
    <ul>
      {books.items.map((book, index) => {
        return <Book book={book} key={index} />;
      })}
    </ul>
  );
};

export default BooksList;