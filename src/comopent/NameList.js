import React from "react";

function NameList() {
    //   const names = ["abc", "asss", "sjdg", "shudw"]; // array method
    //   const nameList = names.map((name) => <h2>{name} </h2>);
    //   return <div>{nameList} </div>;

    //for an object 
    const persons = [
        {
            id: 1,
            name: 'AbortController',
            age: 23,
            skill: 'react'
        },
        {
            id: 2,
            name: 'dfggt',
            age: 24,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'sdfd',
            age: 27,
            skill: 'react'
        },
        {
            id: 4,
            name: 'ftttttty',
            age: 94,
            skill: 'Vue'
        },
    ]
    const personList = persons.map(person => (
        <h2>I am {person.name} with {person.id} I am {person.age} years. I know {person.skill} </h2>
    ))

    return (
        <div>{personList} </div>
    )



  //   return (
  //     <div>
  //       {
  //         names.map(name =>
  //           <h2>{name} </h2>
  //         ) // map method accept function as an arguments here arrow function is used
  //       }
  //     </div>
  //   );
}

export default NameList;
