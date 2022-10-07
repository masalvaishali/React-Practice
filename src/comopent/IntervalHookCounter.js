import React from 'react'
import { useState,useEffect } from 'react'

function IntervalHookCounter() {
    const [count, setCount] = useState(0) // initial render count value is zero

const tick =  () =>{
    // setCount(count +1)  // count value becomes 0+1 =1
    setCount(prevCount => prevCount + 1)
}

useEffect(() => {    
    //compoentDidMount 
  const interval= setInterval(tick, 100)

  //return for //compoentWillUnMount 
  return () => {
    clearInterval(interval)
  }
}, 
//[count] if prevCount not used then use this count in array 
[]
)

  return (
    <div>
        <h5> count from UseEffect hook {count}</h5>
    </div>
  )
}

export default IntervalHookCounter