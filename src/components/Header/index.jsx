import React from 'react';
import { Menu, Header as UIHeader, Button, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { logout } from '../LoginPage/actions';

const Header = ({ isAuthorized, logout }) => {
  const onLogoutClick = () => logout();
  return (
    <Menu attached="top">
      <Menu.Item>
        <UIHeader as="h2">
          <Icon name="users" />
          <UIHeader.Content>Users App</UIHeader.Content>
        </UIHeader>
      </Menu.Item>
      {isAuthorized ? (
        <Menu.Menu position="right">
          <Menu.Item>
            <Button primary icon onClick={onLogoutClick} content="Logout" icon={<Icon name="logout" />} />
          </Menu.Item>
        </Menu.Menu>
      ) : null}
    </Menu>
  );
};

const mapStateToProps = ({ authData: { isAuthorized } }) => ({
  isAuthorized
});

const mapDispatchToProps = {
  logout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
