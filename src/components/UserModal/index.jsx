import React from 'react';
import { connect } from 'react-redux';
import { Segment, Modal, Image, Grid, Button, Icon } from 'semantic-ui-react';
import { hideExpandedUser } from '../UserList/actions';

import styles from './styles.module.scss';

const UserModal = ({
  user: {
    avatar: imgUrl,
    first_name: firstName,
    last_name: lastName,
    email
  }, hideExpandedUser
}) => {
  const onCloseClick = () => hideExpandedUser();
  return (
    <Modal size="medium" open>
      <Modal.Header>User Information</Modal.Header>
      <Modal.Content>
        <Grid columns={2} divided verticalAlign="middle">
          <Grid.Column textAlign="center" width={4}>
            <Image src={imgUrl} avatar size="small" centered fluid />
          </Grid.Column>
          <Grid.Column width={8}>
            <Segment basic>
              <div className={styles.userInfo}>
                ID:
                {' '}
                {`${firstName} ${lastName}`}
              </div>
              <div className={styles.userInfo}>
                Email:
                {' '}
                {email}
              </div>
            </Segment>
          </Grid.Column>
        </Grid>
      </Modal.Content>
      <Modal.Actions>
        <Button primary onClick={onCloseClick} content="Close" icon={<Icon name="times rectangle" />} />
      </Modal.Actions>
    </Modal>
  );
};

const mapStateToProps = ({ userListData: { expandedUser } }) => ({
  user: expandedUser
});

const mapDispatchToProps = {
  hideExpandedUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserModal);
