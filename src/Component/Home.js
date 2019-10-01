import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUserName } from '.././reducer/User';
import { addItem } from '.././reducer/Data';


class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: this.props.Data.User.username,
      data: this.props.Data.Data,
    }
  }

  ChangeUserName(evt){
    this.props.addUserName(evt.target.value)
  }
  
  Submit = (e) => {
    e.preventDefault();
    this.setState({
      name: this.props.Data.User.username
    })
  }

  render() {
    return(
      <div className="container-fluid">
        <div className="container main-body">
          <div className="header">
            <div className="logo">
              <h1>Logo</h1>
            </div>
            <div className="navigation">
              <div className="right-nav">
                <div>
                  <h3>Home</h3>
                </div>
                <div>
                  <h3>Sell</h3>
                </div>
              </div>
              <div className="left-nav">
                <div>
                  <h3>Register</h3>
                </div>
                <div>
                  <h3>Login</h3>
                </div>
              </div>
            </div>
            <div className="search">

            </div>
          </div>
          <div className="body">
            <div>asdasd</div>
            <div>asdasd</div>
            <div>asdasd</div>
            <div>asdasd</div>
            <div>asdasd</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUserName: username => {
       dispatch(addUserName(username))
    },
    addItem: data => {
      dispatch(addItem(data))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    Data: state
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)