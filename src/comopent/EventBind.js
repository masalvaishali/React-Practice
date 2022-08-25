import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }
    //   {/* binding in constructor */}
    //   this.ClickHandler = this.ClickHandler.bind(this); 
    }

    ClickHandler=()=>{
        this.setState({
            message:'Goodbye'
        })
    }

  render() {
    return (
      <div><div>{this.state.message}</div> 
        {/* <button onClick={ this.ClickHandler.bind(this)}> Click Me</button> */}
        {/* <button onClick={ () => this.ClickHandler()}> Click Me</button> */}
         {/* binding in constructor */}
        <button onClick={ this.ClickHandler}> Click Me</button>  
       

      </div>
    )
  }
}

export default EventBind