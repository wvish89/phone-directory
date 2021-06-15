import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import AddSubscriber from './AddSubscriber'
import ShowSubscribers from './ShowSubscribers';

class PhoneDirectory extends Component{

    constructor(){
        super();

        this.state = {
            subscriberList: [
                {
                    id: 1,
                    name: "Jai",
                    phone: 987645321
                },
                {
                    id: 2,
                    name: "Veeru",
                    phone: 4750343459
                }
            ]
        }
    }

    deleteSubsccriberHandler = (subscriberId) => {
        let subscriberList = this.state.subscriberList;
        let subscriberIndex = 0;
        subscriberList.forEach(function (subscriber, index){
            if(subscriber.id == subscriberId){
                subscriberIndex = index;
            }
        }, this);

        let newSubscriber = subscriberList;
        newSubscriber.splice(subscriberIndex,1);
        this.setState({subscriber: subscriberList});
    }

    addSubscriberHandler = (newSubscriber) => {
        let subscriberList = this.state.subscriberList;
        if (subscriberList.length > 0){
            newSubscriber.id  = subscriberList[subscriberList.length - 1].id + 1;
        }
        else{
            newSubscriber.id = 1;
        }
        subscriberList.push(newSubscriber);
        this.setState({subscriberList: subscriberList})
        console.log(this.state.subscriberList)
    }

    render(){
        return(
            // <AddSubscriber addSubscriberHandler={this.addSubscriberHandler}/>
           // <ShowSubscribers subscriberList={this.state.subscriberList}/>
            
           <Router>
               <div>
               <Route exact path='/' render={(props) => <ShowSubscribers {...props} subscriberList={this.state.subscriberList} deleteSubsccriberHandler={this.deleteSubsccriberHandler} />} />
               <Route exact path='/add' render={({history}, props) => <AddSubscriber  history={history} {...props} addSubscriberHandler={this.addSubscriberHandler} />} />
               </div>
           </Router>

        )
    }
}

export default PhoneDirectory;
