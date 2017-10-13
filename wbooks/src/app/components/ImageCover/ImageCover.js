import React from 'react'
import defaultCover from '../../ASSETS/default_book.svg';
import BookImageCoverStyleSheet from './ImageCover.css'

class ImageCover extends React.Component {
  render() {
    return (
      <img className={`${this.props.className} ${this.props.imageURL ? '' : 'default-cover'}`}
      src={this.props.imageURL || defaultCover}/>
    )
  }
}

ImageCover.defaultProps = {
  className: 'book-image-cover'
}

export default ImageCover
