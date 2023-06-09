import { useState, useEffect } from 'react'
import { getGreeting } from '../apiClient'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Outlet />
    </>
  )
}

export default App
