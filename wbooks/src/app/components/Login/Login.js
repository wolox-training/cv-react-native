import React from 'react';
import { Link } from 'react-router-dom'
import LoginStylesheet from './Login.css'
import WbooksLogo from '../../ASSETS/wbooks_logo.svg'

class Login extends React.Component {
  render() {
    return (
      <div className="login-container">
        <div className="login-form-container">
          <img src={WbooksLogo} className="logo-image" />
          <h3 className="login">Login</h3>
          <form>
            <h3 className="input-label"> Nombre de usuario </h3>
            <input className="login-input input-font" type="text" name="user-name"/>
            <h3 className="input-label"> Contraseña </h3>
            <input className="login-input input-font" type="password" name="password"/>
            <button className="login-button button-font">Login</button>
            <h5 className="register-user-text"> Registrarse </h5>
          </form>
        </div>
      </div>
    )
  }
}

export default Login;
