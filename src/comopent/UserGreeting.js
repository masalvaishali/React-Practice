import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }
  render() {
    let message; //Element Variables approach
    if (this.state.isLoggedIn) {
      message = <div>Welcome Vaishali</div>;
    } else {
      message = <div>Welcome Guest</div>;
    }
    return <div>{message} </div>;
    // return (
    //     <div>
    //         <div>Welcome Vaishali</div>
    //         <div>Welcome Guest</div>
    //     </div>
    // )
  }
}

export default UserGreeting;
