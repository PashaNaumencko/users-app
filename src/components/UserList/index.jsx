import React from 'react';
import { connect } from 'react-redux';
import { Segment, List, Pagination, Header, Dimmer, Loader } from 'semantic-ui-react';
import { fetchUsersRequest, showExpandedUser } from './actions';
import UserItem from '../UserItem';
import UserModal from '../UserModal';

class UserList extends React.Component {
  componentDidMount() {
    this.props.fetchUsersRequest();
  }

  onPaginationChange = (event, { activePage }) => this.props.fetchUsersRequest(activePage);

  render() {
    const { users, currentPage, totalPages, loading, expandedUser } = this.props;
    return loading ? (
      <Dimmer active inverted>
        <Loader inverted content="Loading" />
      </Dimmer>
    ) : (
      <Segment>
        <List divided verticalAlign="middle" size="massive" selection>
          {
            users.map((user) => <UserItem key={user.id} user={user} />)
          }
        </List>
        {users.length ? (
          <Pagination
            boundaryRange={0}
            activePage={currentPage}
            totalPages={totalPages}
            onPageChange={this.onPaginationChange}
          />
        ) : (
          <Header as="h3" textAlign="center" content="No available users" />
        )}
        {expandedUser ? <UserModal /> : null}
      </Segment>
    );
  }
}

const mapStateToProps = ({ userListData: { users, currentPage, totalPages, loading, expandedUser } }) => ({
  users,
  currentPage,
  totalPages,
  loading,
  expandedUser
});

const mapDispatchToProps = {
  fetchUsersRequest,
  showExpandedUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
