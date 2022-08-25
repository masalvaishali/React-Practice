import React from 'react'

function Person({person}) {
  return (
    <div>
     <h2>I am {person.name} with {person.id} I am {person.age} years. I know {person.skill} </h2>

    </div>
  )
}

export default Person