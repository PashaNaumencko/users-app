import React from 'react';
import { connect } from 'react-redux';
import { List, Image } from 'semantic-ui-react';
import { showExpandedUser } from '../../containers/UserList/actions';

const UserItem = ({ user, showExpandedUser }) => {
  const onUserClick = () => showExpandedUser(user);
  const { avatar: imgUrl, first_name: firstName, last_name: lastName } = user;
  return (
    <List.Item onClick={onUserClick}>
      <Image avatar src={imgUrl} />
      <List.Content>
        <List.Header>
          {`${firstName} ${lastName}`}
        </List.Header>
      </List.Content>
    </List.Item>
  );
};

const mapDispatchToProps = {
  showExpandedUser
};

export default connect(null, mapDispatchToProps)(UserItem);
