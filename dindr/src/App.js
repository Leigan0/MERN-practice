import React, { Component } from 'react';
import axios from 'axios';
// import CommentList from './users';


// user a constructor and super method to pass props down

class UserProfiles extends Component {
  constructor(props){
    super(props);
    // set the state of the name and email to empty string
    this.state = {
      NameOfUser: '',
      UserEmail: ''
    };
    // use this keyword to handle the name and email of user and bind to (this)
    this.handleNameOfUser = this.handleNameOfUser.bind(this);
    this.handleUserEmail = this.handleUserEmail.bind(this);
  }
  // listen for an event on the state of both name and email
  handleNameOfUser(event) {
    this.setState({NameOfUser: event.target.value});
  }
  handleUserEmail(event){
    this.setState({UserEmail: event.target.value});
  }
  // create a function that changes the name and email to the value of target input
  addToUserProfile = event => {
    event.preventDefault();
    this.setState({
      NameOfUser: event.target.value,
      UserEmail: event.target.value,
    });
    // use axios to post to database
    axios.post('http://localhost:3001/api/users', {
      NameOfUser: this.state.NameOfUser,
      UserEmail: this.state.UserEmail,
    })
    .then(response => {
      console.log(response, 'User added');
    })
    .catch(err => {
      console.log(err, 'User not added, try again');
    });
    // reset state to empty string
    this.setState({
      NameOfUser: '',
      UserEmail:'',
    })
  };
    render() {
      return (
        <form>
      <input
      onChange={this.handleNameOfUser}
      name="NameOfUser"
      className="NameinputForm"
      value={this.state.NameOfUser}
      placeholder="Enter your name"/>
      <input
      type ='text'
      onChange={this.handleUserEmail}
      name="UserEmail"
      className="EmailinputForm"
      value={this.state.UserEmail}
      placeholder="Enter your email"/>
      <button
      className="submituser"
      type="submit"
      onClick={this.addToUserProfile}
      >
            Add User Profile <i className="AddUserButton" aria-hidden="true" />
            </button>
            </form>
          )
    }

}

export default UserProfiles;
