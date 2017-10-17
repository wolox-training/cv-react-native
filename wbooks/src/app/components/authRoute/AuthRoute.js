import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { DEFAULT_AUTH, DEFAULT_NO_AUTH } from '../../utils/Constants';
import access_token from '../../utils/Constants.js'

class AuthRoute extends React.Component {


  render() {
    const accessToken = localStorage.getItem(access_token);
    const { component: Component, isPrivate, isPublic, ...routeProps } = this.props;
    return (
      <Route
        {...routeProps}
        render={(props) => {
          if (isPublic && accessToken) {
            return <Redirect to = {DEFAULT_AUTH}/>;
          } else if (isPrivate && !accessToken) {
            return <Redirect to={DEFAULT_NO_AUTH}/>;
          } else {
            return <Component {...props} />;
          }
        }}
      />
    )
  }
}

export default AuthRoute;
