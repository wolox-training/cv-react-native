import React from 'react'
import defaultCover from '../../ASSETS/default_book.svg';
import BookImageCoverStyleSheet from './ImageCover.css'

class ImageCover extends React.Component {
  render() {
    return (
      <img className={`${this.props.className} ${this.props.image_url ? '' : 'default-cover'}`}
      src={this.props.image_url || defaultCover}/>
    )
  }
}

ImageCover.defaultProps = {
  className: 'book-image-cover'
}

export default ImageCover
