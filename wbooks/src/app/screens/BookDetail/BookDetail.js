import React from 'react';
import PropTypes from 'prop-types';
import booksList from '../../utils/booksList';
import BookDetailSection from './BookDetailSection/BookDetailSection.js'
import SuggestionSection from './SuggestionSection/SuggestionSection.js'
import CommentSection from './CommentSection/CommentSection.js'
import { Link } from 'react-router-dom'
import './BookDetail.css'

const bookById = (id) => booksList.find((book) => book.id === parseInt(id))

class BookDetail extends React.Component {
  render() {
    const book = bookById(this.props.match.params.id);
    return (
      <div>
        <Link to='/'>
          <h5 className="back-button-link"> Volver </h5>
        </Link>
        <BookDetailSection
          book={book}
        />
        <SuggestionSection
          elements={booksList[0]}>
        </SuggestionSection>
        <CommentSection />
      </div>
    )
  }

};

export default BookDetail
