import React from 'react';
import '../../App.css';
import booksList from '../../app/utils/booksList';
import Book from '../../app/components/Book.js';
import search_icon from '../ASSETS/search.svg';

class BooksDashboard extends React.Component {
  render() {
    const booksItems = booksList.map(
      (bookItem) => (
        <Book
          book={bookItem}
          key = {bookItem.id}
        />
      )
    );
    return (
      <div>
        <div className="book-list">
          <form className="search-form">
            <select className="search-input selector">
              <option value="" selected disabled>Seleccionar filtro</option>
              <option value="title">Titulo</option>
              <option value="author">Autor</option>
            </select>
            <input type="text" name="name" placeholder="Buscar..." className="search-input"/>
            <img src = {search_icon} className="search-icon" />
          </form>
          <div className="books-container">
            {booksItems}
          </div>
        </div>
      </div>
    );
  };
}

export default BooksDashboard;
