import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ path, component: Component }) {
  return (
    <Route
      path={path}
      exact
      render={(props) => {
        if (localStorage.getItem('user')) {
          return <Component />;
        }
        return <Redirect to="/login" />;
      }}
    />
  );
}

export default PrivateRoute;