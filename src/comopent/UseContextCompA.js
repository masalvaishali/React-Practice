import React from 'react'
import UseContextCompB from './UseContextCompB'

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function UseContextCompA() {
  return (
    <div>
   		<UserContext.Provider value={'Vishwas'}>
        <ChannelContext.Provider value={'Codevolution'}>
				<UseContextCompB/>
				</ChannelContext.Provider>
			</UserContext.Provider>
    </div>
  )
}

export default UseContextCompA