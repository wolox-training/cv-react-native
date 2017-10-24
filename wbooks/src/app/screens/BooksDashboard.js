import React from 'react';
import '../../App.css';
import booksList from '../../app/utils/booksList';
import './BookDashboard.css'
import { getBooks } from '../../services/booksService.js'
import Layout from './Layout.js'
import { changeFilterType, changeFilterText, filter } from '../../redux/filters/actions.js'
import { connect } from 'react-redux'
import { onLoadBooksFinished, loadingBooks } from '../../redux/books/actions'


class BooksDashboard extends React.Component {

  handleTypeChange = (event) => {
    this.props.dispatch(changeFilterType(event.target.value));
  }

  handleTextChange = (event) => {
    this.props.dispatch(changeFilterText(event.target.value))
  }

  componentDidMount = () => {
    this.props.dispatch(loadingBooks());
    getBooks().then((response) => {
      this.props.dispatch(onLoadBooksFinished(response.data))
    })
  }


  filteredBooks = () => {
    return this.props.booksList.filter(book => {
      if (this.props.activeFilterType === 'author') {
        return book.author.includes(this.props.activeFilterText);
      } else {
        return book.title.includes(this.props.activeFilterText);
      }
    });
  }

  handleFilter = () => {
    this.props.dispatch(filter())
  }

  render() {
    return (
      <Layout
        items={this.filteredBooks()}
        onTypeChange={this.handleTypeChange}
        onTextChange={this.handleTextChange}
        onHandleFilter={this.handleFilter}
        filterType={this.props.filterType}
        filterTextValue={this.props.filterText}
        isLoading={this.props.isLoading}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  filterType: state.filters.filterType,
  filterText: state.filters.filterText,
  activeFilterType: state.filters.activeFilterType,
  activeFilterText: state.filters.activeFilterText,
  booksList: state.books.booksList,
  isLoading: state.books.isLoading
});

export default connect(mapStateToProps)(BooksDashboard);
