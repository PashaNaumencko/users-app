import React from 'react';
import { connect } from 'react-redux';
import { Segment, Modal, Image, Header, Grid, Button, Icon } from 'semantic-ui-react';
import { hideExpandedUser } from '../../containers/UserList/actions';

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
    <Modal size="tiny" open>
      <Modal.Header>User Information</Modal.Header>
      <Modal.Content>
        <Grid columns={2} divided verticalAlign="middle">
          <Grid.Column textAlign="center">
            <Image src={imgUrl} avatar size="small" centered fluid />
          </Grid.Column>
          <Grid.Column>
            <Segment basic>
              ID: {`${firstName} ${lastName}`}
              Email: {email}
            </Segment>
          </Grid.Column>
        </Grid>
      </Modal.Content>
      <Modal.Actions>
        <Button primary onClick={onCloseClick}>
            Close
          <Icon name="times rectangle" />
        </Button>
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
