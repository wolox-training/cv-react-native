import React from 'react';
import { connect } from 'react-redux';
import { getGroups } from '../../../services/GroupsService.js';
import { loadingGroups, onLoadGroupsFinished } from '../../../redux/groups/actions.js';
import Layout from './layout.js';

class Groups extends React.Component {
  componentDidMount() {
    this.props.dispatch(loadingGroups());
    getGroups().then((response)=> {
      this.props.dispatch(onLoadGroupsFinished(response.data));
    });
  }

  render() {
    return(
      <Layout
        groupsList={this.props.groupsList}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  groupsList: state.groups.groupsList
});

export default connect(mapStateToProps)(Groups);
