import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ path, component: Component }) {
  return (
    <Route
      path={path}
      exact
      render={(props) => {
        if (localStorage.getItem('userId')) {
          return <Component />;
        }
        return <Redirect to="/login" />;
      }}
    />
  );
}

export default PrivateRoute;