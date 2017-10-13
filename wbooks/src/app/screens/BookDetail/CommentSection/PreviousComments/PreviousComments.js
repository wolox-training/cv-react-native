import React from 'react';
import './PreviousComments.css'

class PreviousComments extends React.Component {
  render() {
    return(
      <div className="comment-section-container">
        <img src={null} className="avatar-image" />
        <div className="comment-history">
          <h5 className="comment-name"> Mariana Perez </h5>
          <h5 className="comment-date">27/07/2016</h5>
          <p className="comment-text"> Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    )
  }
}

export default PreviousComments;
