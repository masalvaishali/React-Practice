import React, { Component } from "react";
import LifcycleB from "./LifecycleB";

class LifcycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Vaishali",
    };
    console.log("LifecycleA Constructor method");
  }
  static getDerivedStateFromProps(state, props) {
    console.log("LifecycleA getDerivedStateFromProps Method ");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleA componentDidMount Method ");
  }
  shouldComponentUpdate() {
    console.log("LifecycleA shouldComponentUpdate Method ");
    return true;
  }
  getSnapshotBeforeUpdate(pervProps,pervState) {
    console.log("LifecycleA getSnapshotBeforeUpdate Method ");
    return null;
  }
  componentDidUpdate() {
    console.log("LifecycleA componentDidUpdate Method ");
  }
  changeState=()=> {
    this.setState({
        name:'Masal'
    })
  }
  render() {
    console.log("LifecycleA render Method ");
    return (
      <div>
        <div>Lifcycle A</div>
        <button onClick={this.changeState}>Change State </button>
        <LifcycleB />
      </div>
    );
  }
}

export default LifcycleA;
