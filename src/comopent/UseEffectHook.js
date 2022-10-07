import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function UseEffectHook() {
  const [count, setCount] = useState(0);
  const[name, setName] = useState('')

  useEffect(() => {
    console.log("useEffect -- updating document title")
    document.title = `you clicked ${count} times `;
  }, [count]);  //[count] is the parameter on which useEffect effects  :used for conditionally render useEffect

  return (
    <div>
     <input type="text" value={name}  onChange ={ e => setName(e.target.value)} />
      <button
        onClick={() => setCount(count + 1)}>
        Click {count} times
      </button>
    </div>
  );
}

export default UseEffectHook;
