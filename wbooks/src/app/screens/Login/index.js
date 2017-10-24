import React from 'react';
import { Link } from 'react-router-dom';
import { Route, Redirect } from 'react-router';
import { connect } from 'react-redux'
import {handleCredentialsError, isLoggedIn, switchLoadingstate } from '../../../redux/login/actions'
import { login } from '../../../services/authentication.js';
import './Login.css';
import LoginLayout from './LoginLayout.js';

class Login extends React.Component {

  handleLogin = ({ username, password }) => {
    this.props.dispatch(switchLoadingstate(true));
    login(username, password).then(() => {
      this.props.dispatch(isLoggedIn(true));
    }).catch((error)=> {
      console.log ('entro aca')
      this.props.dispatch(switchLoadingstate(false))
      this.props.dispatch(handleCredentialsError('Los datos ingresados no son validos en el sistema.'));
    })
  }

  render() {
    if(this.props.isLoggedIn) {
      return <Redirect to='/' />;
    }
    return (
      <LoginLayout
        loading={this.props.loading}
        onSubmit={this.handleLogin}
        credentialsError={this.props.credentialsError}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.login.isLoggedIn,
  loading: state.login.loading,
  credentialsError: state.login.credentialsError
});

export default connect(mapStateToProps)(Login);
