import React, { Component } from 'react';
import UserList from './components/UserList/UserList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    //console.log('Compomemt render');
    return <UserList />;
  }
}

export default App;
