import React from 'react';
import { connect } from 'react-redux';
import { getContacts } from '../../../services/ContactsService.js';
import { loadingContacts, onLoadContactsFinished } from '../../../redux/contacts/actions.js';
import Layout from './Layout.js';

class ContactsList extends React.Component {

  componentDidMount() {
    this.props.dispatch(loadingContacts());
    getContacts().then((response) => {
      this.props.dispatch(onLoadContactsFinished(response.data));
    });
  }

  render() {
    return(
      <Layout
        items={this.props.contactsList}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  contactsList: state.contacts.contactsList
});

export default connect(mapStateToProps)(ContactsList);
