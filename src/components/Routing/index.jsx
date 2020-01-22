import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import UserList from '../UserList';
import LoginPage from '../LoginPage';

const Routing = () => (
  <Container>
    {/* <Header /> */}
    <Switch>
      <Route exact path="/" component={UserList} />
      <Route exact path="/login" component={LoginPage} />
      {/* <Route path="*" component={NotFound} /> */}
    </Switch>
  </Container>
);

export default Routing;
