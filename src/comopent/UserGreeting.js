import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    //Short Circuit Operator
    return this.state.isLoggedIn && <div>Welcome Vaishali</div>;

    // //Ternary Conditional Operator
    // return this.state.isLoggedIn ? (
    //   <div>Welcome Vaishali</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );

    // //Element Variables approach
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Vaishali</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }
    // return <div>{message} </div>;
    //if/esle approach
    // return (
    //     <div>
    //         <div>Welcome Vaishali</div>
    //         <div>Welcome Guest</div>
    //     </div>
    // )
  }
}

export default UserGreeting;
