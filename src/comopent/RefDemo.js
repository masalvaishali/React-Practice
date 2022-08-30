import React, { Component} from 'react'

 class RefDemo extends Component {
    constructor(props) {
      super(props)
      this.inputRef = React.createRef()
      this.cbRef=null   //cbRef=call back ref variable
      this.setCbRef = element => {   //setCbRef = Set call Back ref variable
        this.cbRef=element
      }
     
    }
    componentDidMount(){
        // this.inputRef.current.focus()
        // console.log( this.inputRef)
        if(this.cbRef)
        {
            this.cbRef.focus()
        }
    }
    clickHandler=()=>{
        alert(this.inputRef.current.value)
    }
  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef}/>
        <input type='text' ref={this.setCbRef}/>
        <button onClick={this.clickHandler}>Click me</button>
      </div>
    )
  }
}

export default RefDemo