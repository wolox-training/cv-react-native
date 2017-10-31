import React from 'react';
import { connect } from 'react-redux';
import { getContacts } from '../../../services/ContactsService.js';
import { loadingContacts, onLoadContactsFinished } from '../../../redux/contacts/actions.js';
import Layout from './Layout.js';
import PropTypes from 'prop-types';
import { Button, NavigatorIOS, Text, View } from 'react-native';

export default class NavigatorIOSApp extends React.Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: MyScene,
          title: 'My Initial Scene',
          passProps: {index: 1},
        }}
        style={{flex: 1}}
      />
    )
  }
}

class ContactsList extends React.Component {

  static propTypes = {
    route: PropTypes.shape({
      title: PropTypes.string.isRequired
    }),
    navigator: PropTypes.object.isRequired,
  }

  constructor(props, context) {
    super(props, context);
    this._onForward = this._onForward.bind(this);
  }

  _onForward() {
    let nextIndex = ++this.props.index;
    this.props.navigator.push({
      component: MyScene,
      title: 'Scene ' + nextIndex,
      passProps: {index: nextIndex}
    });
  }

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
        onclick={this._onForward}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  contactsList: state.contacts.contactsList
});

export default connect(mapStateToProps)(ContactsList);
