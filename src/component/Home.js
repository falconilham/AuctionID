import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUserName } from '../reducer/User';
import { addItem } from '../reducer/Data';
import Navigator from '.././navigation'; 
import * as firebase from "firebase";
import ReactPlaceholder from 'react-placeholder';
import 'react-placeholder/lib/reactPlaceholder.css';
import {awesomePlaceholder} from './Loader';
//import { Modal } from 'react-bootstrap';
//import { TextBlock, MediaBlock, TextRow, RectShape, RoundShape } from 'react-placeholder';
//import ReactPlaceholder from 'react-placeholder';

class Home extends Component {
  constructor(){
    super();
    this.state = {
      page : null,
      isLoading: false,
    }
    this.getData.bind(this)
    this.moreData.bind(this)
  }

  componentDidMount(){
    const { Data } = this.props;
    Data.length === 0 ? this.getData() : console.log("")
  }
  
  getData = async () => {
    const { addItem, Data } = this.props
    this.setState({
      isLoading: !this.state.isLoading
    })
    let data_handler = [...Data]
    try{
      await firebase.firestore().collection('products').limit(3).get()
      .then(querySnapshot => {
        if(querySnapshot.docs.length === 0){
          console.log("Belum Ada Data")
        }else{
          querySnapshot.docs.forEach(doc => {
            data_handler.push(doc.data());
          });
          addItem(data_handler)
          this.setState({
            page: querySnapshot.docs.length - 1
          })
        }
      });
    }catch(error){
      console.log(error)
    }
    this.setState({
      isLoading: false
    })
  }

  moreData = async() => {
    const { addItem, Data } = this.props
    const {page} = this.state
    let data_handler = [...Data]
    let current = await firebase.firestore().collection('products').orderBy("name").startAfter(page).limit(3)
    try{
      current.get()
      .then(querySnapshot => {
        this.setState({
          page: querySnapshot.docs.length - 1
        })
        querySnapshot.docs.forEach(doc => {
          data_handler.push(doc.data());
        });
        addItem(data_handler)
      })
    }catch(error){
      console.log(error)
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

  Loaded(){
    const { total } = this.state
    let tai = this.props.Data
    this.setState({
      total : total + 1
    })
    if(total === tai.length - 1){
      this.setState({
        isLoading: false
      })
    }
  }

  render(){
    const { Data } = this.props
    const { isLoading } = this.state
    return(
      <div className="container main-body">
        <Navigator />
        <ReactPlaceholder showLoadingAnimation ready={!isLoading} customPlaceholder={awesomePlaceholder}>
        <div className="body">
            {(Data || []).map((item, i) => {
              return(
                <div className="col-sm card" key={i}>
                  <div>
                    <img src={item.image} onLoad={() => this.Loaded()}  alt={i}/>
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
            <button onClick={this.moreData} type="button" className="btn btn-light">More Item</button>
          ):(
            <button disabled type="button" className="btn btn-light">Loading</button>
          )}
        </div>
        </ReactPlaceholder>
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
    User: state.User.username.name
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)