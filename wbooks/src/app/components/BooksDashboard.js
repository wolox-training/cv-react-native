import React from 'react';
import '../../App.css';
import booksList from '../../app/utils/booksList';
import Book from './Book/Book.js';
import search_icon from '../ASSETS/search.svg';
import './BookDashboard.css'

class BooksDashboard extends React.Component {

  state = {
    filterType: '',
    filterText: '',
    activeFilterType: '',
    activeFilterText: ''
  }

  handleTypeChange = (event) => {
    this.setState({
      filterType: event.target.value
    });
  }

  handleTextChange = (event) => {
    this.setState({
      filterText: event.target.value
    });
  }

  filteredBooks = () => {
    return booksList.filter(book => {
      if (this.state.activeFilterType === 'author') {
        return book.author.includes(this.state.activeFilterText);
      } else {
        return book.title.includes(this.state.activeFilterText);
      }
    });
  }

  handleFilter = () => {
    this.state.filterText
    return this.setState(prevState => ({
      activeFilterText: prevState.filterText,
      activeFilterType: prevState.filterType,
    }));
  }

  render() {
    const booksItems = this.filteredBooks().map(
      (bookItem) => (
        <Book
          book={bookItem}
          key={bookItem.id}
        />
      )
    );

    return (
      <div>
        <div className="book-list">
          <form className="search-form">
            <select className="search-input selector"
            onChange={this.handleTypeChange} value={this.state.filterType}>
              <option value="" selected disabled>Seleccionar filtro</option>
              <option value="BooksDashboardStyleSheet.title">Titulo</option>
              <option value="author">Autor</option>
            </select>
            <input
            type="text" name="name" placeholder="Buscar..."
              className="search-input" onChange={this.handleTextChange}
              value={this.state.filterText}/>
            <img src = {search_icon} className="search-icon"
              onClick={this.handleFilter} alt="cover image"/>
          </form>
          <div className="books-container">
            {
              booksItems.length === 0 ? (
                <h2>La busqueda no encontró resultados.</h2>
              ) : (
                booksItems
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

export default BooksDashboard;
