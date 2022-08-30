import React, { Component } from 'react'
import ForwordRefInput from './ForwordRefInput'

class ForwordRefParentInput extends Component {
    constructor(props) {
      super(props)
      this.inputRef = React.createRef()
    }
    clickHandler=()=>{
        this.inputRef.current.focus()
    }
  render() {
    return (
      <div>
        <ForwordRefInput ref={this.inputRef} />
        <button onClick={this.clickHandler}>Focus Input From Parent Comp</button>
      </div>
    )
  }
}

export default ForwordRefParentInput