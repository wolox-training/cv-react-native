import React from 'react';
import PropTypes from 'prop-types';
import defaultCover from '../ASSETS/default_book.svg';

class Book extends React.Component {
  render() {
    return (
      <div className="book-item">
        <img
          className={this.props.book.image_url ? "book-image-cover" : "book-image-cover default-cover"}
          src={this.props.book.image_url || defaultCover}
        />
        <h3 className="book-title">{this.props.book.title}</h3>
        <h4 className="book-author">{this.props.book.author}</h4>
      </div>
    );
  }
}

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    imageCover: PropTypes.string
  })
}

export default Book;
