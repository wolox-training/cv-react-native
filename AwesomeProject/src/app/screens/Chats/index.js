import React from 'react';
import { connect } from 'react-redux';
import { getChats } from '../../../services/ChatsService.js';
import { loadingChats, onLoadChatsFinished } from '../../../redux/chat/actions.js';
import Layout from './Layout.js';
import PropTypes from 'prop-types';


const otherUser = (chat) => chat.receiverId == 1 ? chat.senderId : chat.receiverId;
const iswithUser = (chat) => !chat.groupId;
const isUnique = (value, index, self) => self.indexOf(value) === index;

class ChatsList extends React.Component {

  getUserIds(chats) {
    return chats.filter(iswithUser).map(otherUser).filter(isUnique);
  }

  componentDidMount() {
    this.props.dispatch(loadingChats());
    getChats().then((response) => {
      this.props.dispatch(onLoadChatsFinished(this.getUserIds(response.data)));
    });
  }

  render() {
    return(
      <Layout
        chatsList={this.props.chatsList}
      />
    );
  }
}

ChatsList.propTypes = {
  chatsList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    receiverId: PropTypes.number,
    senderId: PropTypes.number,
    createdAt: PropTypes.number,
    body: PropTypes.string
  })).isRequired
};

const mapStateToProps = (state) => ({
  chatsList: state.chat.chatsList
});

export default connect(mapStateToProps)(ChatsList);
