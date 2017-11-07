import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css';
import { data } from "./data";
import "./app.css";
import Messages from "./messages";
import Toolbar from "./toolbar"

class App extends Component{
  constructor(props){
  super(props)
  //this.state is set to an object with a key of messages that contains data from data.js
  this.state = {
    messages:data
  }
  console.log('data', data);
}

render(){
  return(
    //if you have multiple components they need to be wrapped in a div
    //However if you have a single componet it shouldn't need a div however Josh's memory is suspect.
    <div>
    <Toolbar passUp={this.state.messages} update = {tools => {
      console.log('Update toolbar running'), this.setState({...this.state, messages: tools || this.state.messages})}}/>
    <Messages passIn={this.state.messages} update ={sms =>{
      console.log('Update messages running'), this.setState({...this.state, messages: sms || this.state.messages})}}/>
    </div>
  )
 }
}

export default App;
