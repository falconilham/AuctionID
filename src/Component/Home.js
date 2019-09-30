import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUserName } from '.././reducer/User';
import { addItem } from '.././reducer/Data';
import { bindActionCreators } from 'redux';



class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: this.props.Data.User.username,
      data: this.props.Data.Data,
    }
  }

  ChangeUserName(evt){
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }
  
  Submit(e){
    e.preventDefault();
    this.props.addUserName()
  }

  render() {
    console.log(this.props.Data)
    return (
      <div className="container">
        <input type="text" name="name" value={this.state.name} onChange={this.ChangeUserName.bind(this)} />
        <input type="submit" value="Submit" onClick={this.Submit } />
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators ({
    addUserName: username => {
       dispatch(addUserName(username))
    },
    addItem: data => {
      dispatch(addItem(data))
    }
  })
}

const mapStateToProps = (state) => {
  return {
    Data: state
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)