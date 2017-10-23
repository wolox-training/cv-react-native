import React from 'react';
import PropTypes from 'prop-types';
import booksList from '../../../utils/booksList.js';
import ImageCover from '../../../components/ImageCover/ImageCover.js'
import './BookDetailSection.css'

function BookDetailSection({ book }) {
  return (
    <div className="book-detail-container">
      <ImageCover image_url={book.image_url} className="book-image"/>
      <div className="book-description">
        <h3 className="book-details-title">{book.title}</h3>
        <h4 className="book-details-author">{book.author}</h4>
        <h4 className="book-details-year">{book.year}</h4>
        <h4 className="book-details-genre">{book.genre}</h4>
        <h4 className="book-details-sinopsis">{book.description}</h4>
        <button className="rent-button"> Alquilar </button>
      </div>
    </div>
  )
}

export default BookDetailSection
