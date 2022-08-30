import React, { Component } from "react";

class FragmentDemo extends Component {
  render() {
    return (
      //to avoid exacta div node we use fragment
      <React.Fragment>
        <h1>Fragment Demo</h1>
        <p>This decribes the Fragment component Demo</p>
      </React.Fragment>
    );
  }
}

export default FragmentDemo;
