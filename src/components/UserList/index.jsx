import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Segment, List, Pagination, Header, Loader } from 'semantic-ui-react';
import { fetchUsersRequest } from './actions';
import UserItem from '../UserItem';
import UserModal from '../UserModal';

import styles from './styles.module.scss';

class UserList extends React.Component {
  componentDidMount() {
    this.props.fetchUsersRequest();
  }

  onPaginationChange = (event, { activePage }) => this.props.fetchUsersRequest(activePage);

  render() {
    const { users, currentPage, totalPages, loading, expandedUser } = this.props;
    return loading ? (
      <div className={styles.loaderBlock}>
        <Loader active content="Loading" />
      </div>
    ) : (
      <Segment basic fluid>
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

UserList.propTypes = {
  loading: PropTypes.bool,
  fetchUsersRequest: PropTypes.func,
  users: PropTypes.array,
  expandedUser: PropTypes.object,
  totalPages: PropTypes.number,
  currentPage: PropTypes.number
};

const mapStateToProps = ({ userListData: { users, currentPage, totalPages, loading, expandedUser } }) => ({
  users,
  currentPage,
  totalPages,
  loading,
  expandedUser
});

const mapDispatchToProps = {
  fetchUsersRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
