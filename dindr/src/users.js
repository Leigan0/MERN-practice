import React, { Component } from 'react';
import axios from 'axios';

//make a new component that renders data from our database, then export this
// and put it on our user profile page

class Users extends Component {
// use a constructor and super method to pass props down
  constructor(props){
    super(props);
    //use this.state ti set the state of our users to an empty string
    this.state = {
      users: '',
    };
  }
    //use componentDidMount lifecycle method
    componentDidMount(){
      //we'll use fetch and the url of our express api to fetch information from db
      fetch('http://localhost:3001/api/users')
      .then(results =>{
        return results.json()
        // map over the data and return the data we want
        .then(data.map((msg) => {
          return(
            <div key ={msg.results}>
            <h2 className='h2msg'>-{msg.userName}</h2>
            <h2 className='h2msg'>-{msg.userEmail}</h2>
            </div>
          )
          })
            // then set state of the data we just fetched
        this.setState({users: users})
      })
    }
    // now we create a render method
    render(){
    //Inside the render method, we’ll create JSX elements to render our data
    //inside the component. I’m using this.state.messages inside an <h6> tag.
    return (
    <div className="userdataContainer">
          <h6>User profiles</h6>
          {this.state.users}
        </div>
      )

    }
}

export default Users
