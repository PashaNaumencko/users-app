import React from 'react';
import { List, Image } from 'semantic-ui-react';

const UserItem = ({ user: { avatar: imgUrl, first_name: firstName, last_name: lastName } }) => (
  <List.Item>
    <Image avatar src={imgUrl} />
    <List.Content>
      <List.Header>
        {`${firstName} ${lastName}`}
      </List.Header>
    </List.Content>
  </List.Item>
);

export default UserItem;
