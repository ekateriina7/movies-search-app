import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PublicRoute({ path, component: Component }) {
  return (
    <Route
      path={path}
      exact
      render={(props) => {
        if (!localStorage.getItem('userId')) {
          return <Component />;
        }
        return <Redirect to="/movies" />;
      }}
    />
  );
}

export default PublicRoute;