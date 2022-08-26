import React, { Component } from 'react'

 class LifcycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Vaishali'
      }
      console.log('Lifecycle Constructor method');
    }
    static getDerivedStateFromProps(state,props){
        console.log('Lifecycle getDerivedStateFromProps Methos ');
        return null
    }

    componentDidMount(){
        console.log('Lifecycle componentDidMount Methos ');
    }
  render() {
    console.log('Lifecycle render Methos ')
    return (
      <div>Lifcycle B</div>
    )
  }
}

export default LifcycleB