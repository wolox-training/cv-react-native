import React from 'react';
import booksList from '../../../utils/booksList';
import ImageCover from '../../../components/ImageCover/ImageCover.js'
import './SuggestionSection.css'

class SuggestionSection extends React.Component {
  render() {
    return (
        <div className="suggestion-container">
          <h4 className="suggestion-title"> Sugerencias </h4>
          <ImageCover imageURL={this.props.elements.image_url}
          className="suggested-book"/>
        </div>
    )
  }
}

export default SuggestionSection;
