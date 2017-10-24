import React from 'react';
import WbooksLogo from '../../ASSETS/wbooks_logo.svg';
import { Field, reduxForm } from 'redux-form';
import { minLength8, maxLength52, email, emptyValue, oneLetterPasssword } from '../../utils/LoginValidations'

const renderField = ({
  input,
  type,
  meta: { touched, error },
  className
}) => (
  <div>
    <input className={"login-input"} {...input} type={type} />
    {
      touched &&
        (error && <span className="error-message">{error}</span>)
    }
  </div>
)

class LoginLayout extends React.Component {

  render() {
    return (
      <div className="login-container">
        <div className="login-form-container">
          <img
            src={WbooksLogo}
            className="logo-image"
          />
          <h3 className="login">Login</h3>
          <form onSubmit={this.props.handleSubmit}>
            <h3 className="input-label"> Nombre de usuario </h3>
            <Field
              className="login-input input-font"
              component={renderField}
              type="text"
              name="username"
              validate={[email, emptyValue]}
            />
            <h3 className="input-label"> Contraseña </h3>
            <Field
              className="login-input input-font"
              component={renderField}
              type="password"
              name="password"
              validate={[minLength8, maxLength52, emptyValue, oneLetterPasssword]}
            />
            <button disabled={this.props.loading} className="login-button button-font">Login</button>
            <h5 className="register-user-text"> Registrarse </h5>
            {this.props.credentialsError && <span className="error-message">
            {this.props.credentialsError}</span>}
          </form>
        </div>
      </div>
  )}
}

LoginLayout = reduxForm({
  form: 'login'
})(LoginLayout);

export default LoginLayout;
