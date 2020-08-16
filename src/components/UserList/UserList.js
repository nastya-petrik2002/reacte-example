import React, { Component } from 'react';
import { getData } from '../../api/index';
import styles from './UserList.module.scss';
import Spinner from '../Spinner/Spinner';
import Error from '../Error/Error';
import UserItem from '../UserItem/UserItem';

export default class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isFetching: true,
      showWarning: true,
      error: null,
    };
  }
  componentDidMount() {
    this.fetchUsers();
  }
  fetchUsers = async () => {
    try {
      this.setState({
        isFetching: true,
      });
      const newUsers = await getData();
      this.setState({
        users: [...this.state.users, ...newUsers],
        isFetching: false,
      });
      //console.log(this.state);
    } catch (err) {
      this.setState({
        isFetching: false,
        error: { txt: err.message },
      });
    }
  };
  mapUsers = () => {
    return this.state.users.map((user) => {
      return <UserItem {...user} key={user.cell} />;
    });
  };
  handleClick = (event) => {
    event.preventDefault();
    console.log(event);
  };
  logClick = (event) => {
    event.preventDefault();
    console.log(event.currentTarget);
  };
  showClick() {
    this.setState((state) => ({
      showWarning: !state.showWarning,
    }));
  }
  clearError = () => {
    this.setState({
      error: null,
    });
  };
  render() {
    const { users, isFetching, error, showWarning } = this.state;
    return (
      <div className={styles.container}>
        {error && (
          <Error txt={this.state.error.txt} clearError={this.clearError} />
        )}
        {isFetching && <Spinner />}
        {users.length > 0 && this.mapUsers()}
        <div onClick={this.fetchUsers} className={styles.loadButton}>
          Load
        </div>
      </div>
    );
  }
}
