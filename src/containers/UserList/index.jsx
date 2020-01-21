import React from 'react';
import { connect } from 'react-redux';
import { Segment, List, Pagination, Header, Dimmer, Loader } from 'semantic-ui-react';
import { fetchUsersRequest } from './actions';
import UserItem from '../../components/UserItem';

class UserList extends React.Component {
  componentDidMount() {
    console.log('mount');
    this.props.fetchUsersRequest();
    console.log('mount');
  }

  onPaginationChange = (event, { activePage }) => {
    this.props.fetchUsersRequest(activePage);
  };

  render() {
    const { users, currentPage, totalPages, loading } = this.props;
    console.log(this.props);
    return loading ? (
      <Dimmer active inverted>
        <Loader inverted content="Loading" />
      </Dimmer>
    ) : (
      <Segment>
        <List divided verticalAlign="middle" size="large">
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
      </Segment>
    );
  }
}

const mapStateToProps = ({ userListData: { users, currentPage, totalPages, loading } }) => ({
  users,
  currentPage,
  totalPages,
  loading
});

const mapDispatchToProps = {
  fetchUsersRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
