import React from 'react'

// function ForwordRefInput() {
//   return (
//     <div>
//         <input type="text"  />
//     </div>
//   )
// }

 const ForwordRefInput = React.forwardRef((props, ref) => {
    return (
      <div>
          <input type="text" ref={ref} />
      </div>
    )
  })
  

export default ForwordRefInput