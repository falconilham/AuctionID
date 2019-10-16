import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUserName } from '../reducer/User';
import { addItem } from '../reducer/Data';
import Navigator from '.././navigation'; 
import * as firebase from "firebase";
//import { Modal } from 'react-bootstrap';
//import { TextBlock, MediaBlock, TextRow, RectShape, RoundShape } from 'react-placeholder';
//import ReactPlaceholder from 'react-placeholder';

class Home extends Component {
  constructor(){
    super();
    this.state = {
      page : 1,
      isLoading: false,
      ready: false
    }
    this.getData.bind(this)
  }

  componentDidMount = () => {
    const { Data } = this.props;
    if(Data.length === 0){
      this.getData()
    }
  }
  
  getData = async () => {
    const { addItem, Data } = this.props
    this.setState({
      isLoading: !this.state.isLoading
    })
    let { page } = this.state
    let data_handler = [...Data]
    await firebase.firestore().collection('products').get()
      .then(querySnapshot => {
        querySnapshot.docs.forEach(doc => {
        data_handler.push(doc.data());
      });
        addItem(data_handler)
    });

    /* await axios.get(URL).then(async res => {
      console.log(res.data.length)
      for(let item = 0; item < res.data.length; item++){
        data_handler.push(res.data[item])
      }
      addItem(data_handler)
    }) */ 
    this.setState({
      page: page + 1,
      isLoading: !this.state.isLoading
    })
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

  render(){
    const { Data } = this.props
    console.log(Data)
    return(
      <div className="container main-body">
        <Navigator />
        <div className="body">
          {(Data).map((item, i) => {
            return(
              <div className="col-sm card" key={i}>
                <div>
                  <img src={item.image || 'http://via.placeholder.com/400x300'} alt={i}/>
                </div>
                <div>{item.author}</div>
                <div className="detail-item">
                  <div className="price-item">
                    <p className="h6">Current Bid</p>
                    Rp<span className="mb-0">{item.price}</span>
                  </div>
                  <div className="bid-timer">
                    <p className="h6">Time Remaining</p>
                    <span className="h6">7 Days</span>
                  </div>
                </div>
              </div>
            )
          })}
          {this.state.isLoading === false ? (
            <button onClick={this.getData} type="button" className="btn btn-light">More Item</button>
          ):(
            <button disabled type="button" className="btn btn-light">Loading</button>
          )}
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
    Data: state.Data.Data,
    User: state.User.username
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)