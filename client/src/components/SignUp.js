import React, { Component } from 'react';
import axios from 'axios';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      name: '',
      password: ''
    }
  }
  
  addUser() {
    axios.post('http://localhost:5000/user', {
      name: this.state.name,
      password: this.state.password
    })
      .then(res => {
        console.log(res.body)
      })
      .catch(err => {
        console.log(err)
      });
  }

  render() {
    return (
      <div className="container">
        <form>
          <fieldset>
            <label htmlFor="namefield">Username</label>
            <input onChange={evt => this.setState({name: evt.target.value})} value={this.state.name} type="text" id="nameField"/>
            <label htmlFor="namefield">Password</label>
            <input onChange={evt => this.setState({password: evt.target.value})} value={this.state.password} type="password" id="password"/>
            <a className="button" onClick={evt =>  this.addUser(evt)}>Submit</a>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default SignUp;