import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import ImageCover from '../../components/ImageCover/ImageCover.js'
import './book.css'

class Book extends React.Component {

  render() {
    return (
      <div className="book-item">
        <Link to={`/book/${this.props.book.id}`}>
          <ImageCover imageURL={this.props.book.image_url} className="book-image-cover"/>
        </Link>
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
