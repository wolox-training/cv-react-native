import React from 'react';
import { Link } from 'react-router-dom'
import { Route, Redirect } from 'react-router'
import './Login.css'
import WbooksLogo from '../../ASSETS/wbooks_logo.svg'
import { login } from '../../../services/authentication.js'

class Login extends React.Component {

  state = {
    username: '',
    password: '',
    passwordErrorText: '',
    usernameErrorText:'',
    isLoggedIn: false,
    loading: false
  }

  handleUserNameChanged = (event) => {
    const username = event.target.value
    this.setState({username: event.target.value});
    var emailAddress =
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!emailAddress.test(username)) {
      this.setState({usernameErrorText: 'Ingrese un email valido'})
    } else {
      this.setState({usernameErrorText: ''});
    }
  }

  handlePasswordChanged = (event) => {
    const password = event.target.value
    this.setState({password: event.target.value});

      if (password.length === 0) {
        this.setState({passwordErrorText:
          'La contraseña no puede ser vacía'});
      } else if (password.length < 8 && password.length > 52) {
          this.setState({passwordErrorText:
            'La contraseña debe tener entre 8 y 52 caracteres'});
      } else {
          var hasNumber = /\d/;
          if (!hasNumber.test(password)) {
            this.setState({passwordErrorText:
              'La contraseña debe tener al menos un numero'});
          } else {
              this.setState({passwordErrorText: ''});
          }
      }
  }

  handleLogin = (event) => {
    event.preventDefault();
    if (this.state.username.length === 0
      || this.state.password.length === 0) {
      this.setState({passwordErrorText: 'Ambos campos son requeridos.'});
    } else {
      this.setState({loading: true});
      login(this.state.username, this.state.password).then(() => {
        this.setState({isLoggedIn: true});
      }).catch((error)=> {
        this.setState({loading: false})
        this.setState({passwordErrorText: 'Los datos ingresados no son validos en el sistema·'});
      })
    }
  }

  render() {
    if(this.state.isLoggedIn) {
      return <Redirect to='/' />;
    }
    return (
      <div className="login-container">
        <div className="login-form-container">
          <img
            src={WbooksLogo}
            className="logo-image"
          />
          <h3 className="login">Login</h3>
          <form onSubmit={this.handleLogin}>
            <h3 className="input-label"> Nombre de usuario </h3>
            <input
              className="login-input input-font"
              type="text"
              name="user-name"
              onChange={this.handleUserNameChanged}
              value={this.state.username}
            />
            { this.state.usernameErrorText && <span className="error-message">
              {this.state.usernameErrorText} </span>}
            <h3 className="input-label"> Contraseña </h3>
            <input
              className="login-input input-font"
              type="password"
              name="password"
              onChange={this.handlePasswordChanged}
              value={this.state.password}
            />
            {this.state.passwordErrorText && <span className="error-message">
            {this.state.passwordErrorText}</span>}
            <button disabled={this.state.loading} className="login-button button-font">Login</button>
            <h5 className="register-user-text"> Registrarse </h5>
          </form>
        </div>
      </div>
    )
  }
}

export default Login;
