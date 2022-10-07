import React , {useState} from 'react'
import HookUseEffectMouseClick from './HookUseEffectMouseClick'

function HookUseEffectMouseClickCleanUp() {
  const[display, setDisplay] = useState(true)
  return (
    <div>
         <button onClick={()=> setDisplay(!display)}> Toggle Display</button>
         {display && <HookUseEffectMouseClick /> }
    </div>
  )
}

export default HookUseEffectMouseClickCleanUp