import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container, Segment } from 'semantic-ui-react';
import { NotificationContainer } from 'react-notifications';
import Header from '../Header';
import UserList from '../UserList';
import LoginPage from '../LoginPage';
import PrivateRoute from '../PrivateRoute';
import NotFound from '../NotFound';

import 'react-notifications/lib/notifications.css';

const Routing = () => (
  <Container>
    <Header />
    <Segment attached="bottom">
      <Switch>
        <PrivateRoute exact path="/" component={UserList} />
        <Route exact path="/login" component={LoginPage} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Segment>
    <NotificationContainer />
  </Container>
);

export default Routing;
