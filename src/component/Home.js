import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUserName } from '../reducer/User';
import { addItem } from '../reducer/Data';
import Navigator from '.././navigation';
import axios from 'axios';


class Home extends Component {
  constructor(){
    super();
    this.state = {
      page : 1
    }
  }

  getData = async () => {
    const { addItem, Data } = this.props
    let { page } = this.state
    let data_handler = [...Data]
    let URL = "https://picsum.photos/v2/list?page="+page+"&limit=10"
    await axios.get(URL).then(async res => {
      for(let item = 0; item < 10; item++){
        data_handler.push(res.data[item])
      }
      addItem(data_handler)
    })
    this.setState({
      page: page + 1
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
    return(
      <div className="container main-body">
        <Navigator />
        <div className="body">
          {(Data).map((item, i) => {
            return(
              <div className="col-sm card" key={i}>
                <img src={item.download_url} alt={i}/>
                <div>{item.author}</div>
              </div>
            )
          })}
          <button onClick={this.getData.bind(this)} type="button" className="btn btn-light">More Data</button>
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