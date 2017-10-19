import React from 'react';
import '../../App.css';
import booksList from '../../app/utils/booksList';
import Book from '../components/Book/Book.js';
import './BookDashboard.css'
import { getBooks } from '../../services/booksService.js'
import Layout from './Layout.js'

class BooksDashboard extends React.Component {

  state = {
    filterType: '',
    filterText: '',
    activeFilterType: '',
    activeFilterText: '',
    booksList: [],
    isLoading: false
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

  componentDidMount = () => {
    this.setState({isLoading: true});
    getBooks().then((response) => {
      this.setState({ booksList: response.data, isLoading: false});
    })
  }


  filteredBooks = () => {
    console.log(this.state.booksList);
    return this.state.booksList.filter(book => {
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
      <Layout
        items={booksItems}
        onTypeChange={this.handleTypeChange}
        onFilterType={this.filterType}
        onTextChange={this.handleTextChange}
        filterTextValue={this.state.filterText}
        onHandleFilter={this.handleFilter}
        isLoading={this.state.isLoading}
      />
    );
  }
}

export default BooksDashboard;
