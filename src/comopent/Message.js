import React, { Component } from "react";

class Message extends Component {
    constructor(){
        super()
        this.state = {
            message : 'Welcome Visitors'
        }
    }

    changeMessage() {
        this.setState({
            message: 'Thank you for visiting'
        })
    }
   render(){
    return (
        <div>
            <h1> {this.state.message} </h1>
        <button onClick={() => this.changeMessage()}>Click ME</button>
        </div>
         )
   }
       
           
    
}

export default Message
