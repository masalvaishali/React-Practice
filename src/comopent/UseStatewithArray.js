import React from 'react'
import { useState } from 'react'

function UseStatewithArray() {
    const [items, setItems] = useState([])
    const addItem = () => {
        setItems([...items,{
            id:items.lemgth,
            value: Math.floor(Math.random() * 10) +1   
        }])
    }

  return (
    <div>
        <button onClick={addItem} > Add Number</button>
        <ul>
            {items.map(item =>(
                <li key = {item.id}> {item.value} </li>
            ))}
        </ul>

    </div>
  )
}

export default UseStatewithArray