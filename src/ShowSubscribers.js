import React, { Component} from 'react';
import './ShowSubscribers.css';
import Header from './Header';
import { Link } from 'react-router-dom';


// let subscriber = [
    //   { id:101, name: 'Vish', phone: '9876353737'},
    //   { id:102, name: 'Sam', phone: '7635798398'}
    // ]

class ShowSubscribers extends Component {

  // constructor(){
  //   super();
  //   this.state = {
  //     subscriberListToShow: []
  //   }
  // }

  deleteHandler = (id) => {
    this.props.deleteSubsccriberHandler(id);
  }

  // componentDidMount(){
  //   let newSubscriber = {
  //     id: 1,
  //     name: "Vish",
  //     phone: 9876543210
  //   }

  //   let subscriberList = this.state.subscriberListToShow;
  //   subscriberList.push(newSubscriber);
  //   this.setState({subscriberListToShow: subscriberList});
  // }

  
  render(){

    return (
      <div className="component-container">
        <Header heading="Phone Directory" />
        <div className="component-body-container">
         <Link to='/add' > <button className="custom-btn add-btn"> Add </button> </Link> 
          <div className="grid-container heading-container">
            <span className="grid-item name-heading"> Name </span>
            <span className="gitd-item phone-heading"> Phone </span>
          </div>

          {
            this.props.subscriberList.map(sub => {
              return <div key={sub.id} className="grid-container">
              <span className="grid-item"> {sub.name} </span>
              <span className="gitd-item"> {sub.phone} </span>
              <span className="gitd-item action-btn-container">
                <button className="custom-btn delete-btn" onClick={this.deleteHandler.bind(sub.id)}> Delete </button>
              </span>
            </div>
            })
          }

        </div>
        
      </div>
      
    );
  }
}

export default ShowSubscribers;
