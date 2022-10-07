import React from 'react'
import { useState, useEffect } from 'react'

function HookUseEffectMouseClick() {
    const[x, setX] = useState(0) 
    const[y, setY] = useState(0) 
 
    const logMousePosition = e =>{
        console.log('Mouse Even');
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(() => {
      //componentDidMount replacement
    console.log('UseEffect called')
    window.addEventListener('mousemove' , logMousePosition)     

    return() => {
        //componentWillUnmount replacement for clean up 
    console.log('component unmounting code')
    window.removeEventListener('mousemove' , logMousePosition) 
    }
    }, [])
    
  return (
    <div>
        Hooks X - {x} Y - {y}
    </div>
  )
}

export default HookUseEffectMouseClick