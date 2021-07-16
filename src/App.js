import './App.css';
import React, {PureComponent} from 'react';
import SignIn from './components/SignIn';
import Chat from './components/Chat';
import {auth} from './firebase';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {user: {}};
    this.unsubscribe = ()=>(null);
  }
  componentDidMount() {
    this.unsubscribe = auth.onAuthStateChanged((user) => {
      this.setState({user});
    });  
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {    
    return (
      <>
        {this.state.user ? <Chat /> : <SignIn />}       
      </>
    );
  }
}