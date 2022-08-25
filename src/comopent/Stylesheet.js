import React from "react";
import "./MyStyle.css";

function Stylesheet(props) {
  let className = props.primary ? "primary" : ""; //reading the value of primary props and if it is true then set its value as primary and if it is false then empty
  return (
    <div>
      {/* <h1 className='primary' > Stylesheet </h1>  */}
      {/* <h1 className={className}> Stylesheet </h1> */}
      {/* css style Using  template literals */}
      <h1 className={`${className} font-xl`}> Stylesheet </h1>  
    </div>
  );
}

export default Stylesheet;
