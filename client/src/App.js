import React, { Component } from 'react';
import './App.css';
import 'milligram';
import AllPosts from './components/AllPosts';
import SignUp from './components/SignUp';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSignUp: false,
    }
  }

  changeView = () => {
    this.setState({ showSignUp: true })
  }

  render() {
    return (
      <div className="App">
        <a className="button button-clear" onClick={this.changeView}>Sign up</a>
        {this.state.showSignUp ? <SignUp /> : <AllPosts />}
      </div>
    );
  }
}

export default App;
