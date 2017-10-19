import React from 'react';
import search_icon from '../ASSETS/search.svg';


class Layout extends React.Component {
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
              value={this.props.filterTextValue}/>
            <img src = {search_icon} className="search-icon"
              onClick={this.props.onHandleFilter} alt="cover image"/>
          </form>
          <div className="books-container">
            {
              !this.props.isLoading && this.props.items.length === 0 ? (
                <h2>La busqueda no encontró resultados.</h2>
              ) : (
                this.props.items
              )
            }
          </div>
        </div>
      </div>
    )}
}

export default Layout;
