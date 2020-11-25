import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from "./context/AuthContext";

const ProtectedRoute = ({ component: Component, user, ...rest }) => {
  const { userToken } = useContext(AuthContext)
  return (
    <Route {...rest} render={
      props => {
        if (userToken) {
          return <Component {...rest} {...props} />
        } else {
          return <Redirect to={
            {
              pathname: '/signin',
              state: {
                from: props.location
              }
            }
          } />
        }
      }
    } />
  )
}

export default ProtectedRoute;