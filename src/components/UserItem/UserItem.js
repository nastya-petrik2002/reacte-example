import React, { Component } from 'react';
import styles from './UserItem.module.scss';

export default class UserItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      name,
      location,
      email,
      cell,
      phone,
      picture: { medium: imgSrc },
    } = this.props;
    //console.log(this.props);
    return (
      <div className={styles.userItemContainer}>
        <img className={styles.userAvatar} src={imgSrc} />
        <div>{`${name.title} ${name.first} ${name.last} `}</div>
        <div>{`Telephone number: ${phone}`}</div>
        <div>{`${location.country}, ${location.city}`}</div>
      </div>
    );
  }
}
