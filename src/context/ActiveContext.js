import React from 'react'

const ActiveContext = React.createContext({
  isActive: false,
  getActiveId: () => {},
})
export default ActiveContext
