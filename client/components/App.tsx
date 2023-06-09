import { useState, useEffect } from 'react'
import { getGreeting } from '../apiClient'
import { Outlet } from 'react-router-dom'
import Nav from './Nav'

const App = () => {
  return (
    <>
      <Nav />
      <img src="/images/title.png" alt="" />
      <Outlet />
    </>
  )
}

export default App
