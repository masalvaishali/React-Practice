import React from 'react'

function ChildComponent(props) {
  return (
    <div>
        {/* <button onClick={props.greetHandler}>Greet ParentComponent</button> //pass data from parent to child
        <button onClick={() => props.greetHandler()}>Greet ParentComponent</button>  //pass data from parent  to child
    </div> */}

   {/* pass data from child  to parent */}
        <button onClick={() => props.greetHandler('child')}>Greet ParentComponent</button>  
    </div>
  )
}

export default ChildComponent