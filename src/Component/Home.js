import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addUserName} from '.././reducer/User'

class Home extends Component {
  constructor(){
    super();
    this.state = {
      name: ""
    }
  }

  ChangeUserName(e){
    let user = e.target.value;
    console.log(user)
  }
  
  Submit(){

  }

  render() {
    console.log(this.props.username)
    return (
      <div className="container">
        <form>
          <input type="text" onChange={this.ChangeUserName.bind(this)} name="user" />
          <button type="submit" title="Submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addThePokemon: username => {
       dispatch(addUserName(username))
    }
  }
}

const mapStateToProps = state => {
  return {
    username: state,
    data: state
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)