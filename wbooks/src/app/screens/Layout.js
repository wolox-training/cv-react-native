import React from 'react';
import search_icon from '../ASSETS/search.svg';
import Book from '../components/Book/Book.js';


class Layout extends React.Component {

  getBooksItems = () => this.props.items.map(
    (bookItem) => (
      <Book
        book={bookItem}
        key={bookItem.id}
      />
    )
  );

  render() {
    return(
      <div>
        <div className="book-list">
          <form className="search-form">
            <select className="search-input selector"
            onChange={this.props.onTypeChange} value={this.props.filterType}>
              <option value="" selected disabled>Seleccionar filtro</option>
              <option value="title">Titulo</option>
              <option value="author">Autor</option>
            </select>
            <input
              type="text" name="name" placeholder="Buscar..."
              className="search-input" onChange={this.props.onTextChange}
              value={this.props.filterTextValue}
            />
            <img src = {search_icon} className="search-icon"
              onClick={this.props.onHandleFilter} alt="cover image"/>
          </form>
          <div className="books-container">
            {
              !this.props.isLoading && this.getBooksItems().length === 0 ? (
                <h2>La busqueda no encontró resultados.</h2>
              ) : (
                this.getBooksItems()
              )
            }
          </div>
        </div>
      </div>
    )}
}

export default Layout;
