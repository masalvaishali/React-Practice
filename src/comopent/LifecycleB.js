import React, { Component } from 'react'

 class LifcycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Vaishali'
      }
      console.log('LifecycleB Constructor method');
    }
    static getDerivedStateFromProps(state,props){
        console.log('LifecycleB getDerivedStateFromProps Methos ');
        return null
    }

    componentDidMount(){
        console.log('LifecycleB componentDidMount Methos ');
    }
    shouldComponentUpdate() {
        console.log("LifecycleB shouldComponentUpdate Method ");
        return true;
      }
      getSnapshotBeforeUpdate(pervProps,pervState) {
        console.log("LifecycleB getSnapshotBeforeUpdate Method ");
        return null;
      }
      componentDidUpdate() {
        console.log("LifecycleB componentDidUpdate Method ");
      }

  render() {
    console.log('LifecycleB render Methos ')
    return (
      <div>Lifcycle B</div>
    )
  }
}

export default LifcycleB