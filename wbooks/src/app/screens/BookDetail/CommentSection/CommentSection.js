import React from 'react';
import './CommentSection.css'
import PreviousComments from './PreviousComments/PreviousComments.js'

class CommentSection extends React.Component {
  render() {
    return(
      <div className="comment-container">
        <h4 className="comment-title">Comentarios</h4>
        <form className="form-container">
          <img src={null} className="user-avatar"/>
          <div className="comment-input-form">
            <h5 className="add-comment-text"> Agregar comentario </h5>
            <input className="comment-input" />
            <button className="send-button"> Enviar </button>
          </div>
        </form>
        <PreviousComments />
      </div>
    )
  }
}

export default CommentSection;
