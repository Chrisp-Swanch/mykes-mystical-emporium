import { useState, useEffect } from 'react'
import { getGreeting } from '../apiClient'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
      <img src="/images/title.png" alt="" />
      <Outlet />
    </>
  )
}

export default App
